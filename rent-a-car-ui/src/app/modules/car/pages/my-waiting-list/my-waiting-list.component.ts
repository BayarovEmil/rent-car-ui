import { Component } from '@angular/core';
import {RentedCarResponse} from "../../../../services/models/rented-car-response";
import {CarService} from "../../../../services/services/car.service";
import {CarResponse} from "../../../../services/models/car-response";
import {FeedbackService} from "../../../../services/services/feedback.service";
import {PageResponseCarResponse} from "../../../../services/models/page-response-car-response";
import {ActivatedRoute, Router} from "@angular/router";
import {WaitingCarService} from "../../../../services/services/waiting-car.service";

@Component({
  selector: 'app-my-waiting-list',
  templateUrl: './my-waiting-list.component.html',
  styleUrl: './my-waiting-list.component.scss'
})
export class MyWaitingListComponent {
  selectedCar: CarResponse | undefined = undefined;
  rentedCars: PageResponseCarResponse = { content: [], totalPages: 0 };
  feedbackRequest = {
    note: 0,
    comment: '',
    carId: 0
  };
  carResponse: PageResponseCarResponse = {};
  waitingList: CarResponse[] = [];
  page = 0;
  size = 4;
  pages: any = [];
  message = '';
  level: 'success' |'error' = 'success';

  constructor(
    private carService: CarService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private waitingCarService: WaitingCarService
  ) {
  }


  rentCar() {
    const carId = this.activatedRoute.snapshot.params['carId'];
    console.log("Rented car is ::"+carId)
    this.carService.rentCar({
      'car-id':2
    }).subscribe({
      next: () => {
        this.selectedCar = undefined;
        this.findAllWaitingList();
      }
    });
  }

  findAllWaitingList() {
    this.message = '';
    this.level = 'success';
    this.waitingCarService.findAllWaitingCars({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (cars) => {
        this.carResponse = cars;
        this.pages = Array(this.carResponse.totalPages)
          .fill(0)
          .map((x, i) => i);
        this.level = 'success';
        this.message = 'Car successfully added to your list';
      },
      error: (err) => {
        console.log(err);
        this.level = 'error';
        this.message = err.error.error;
      }
    });
  }

  gotToPage(page: number) {
    this.page = page;
    this.findAllWaitingList();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllWaitingList();
  }

  goToPreviousPage() {
    this.page--;
    this.findAllWaitingList();
  }

  goToLastPage() {
    this.page = this.rentedCars.totalPages as number - 1;
    this.findAllWaitingList();
  }

  goToNextPage() {
    this.page++;
    this.findAllWaitingList();
  }

  get isLastPage() {
    return this.page === this.rentedCars.totalPages as number - 1;
  }

  displayCarDetails(car: RentedCarResponse) {
    console.log("Salam" +car.id)
      this.router.navigate(['cars', 'details',2]);
  }
}
