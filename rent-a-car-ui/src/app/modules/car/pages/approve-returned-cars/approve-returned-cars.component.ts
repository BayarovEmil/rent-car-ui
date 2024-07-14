import { Component } from '@angular/core';
import {PageResponseCarResponse} from "../../../../services/models/page-response-car-response";
import {CarResponse} from "../../../../services/models/car-response";
import {FeedbackRequest} from "../../../../services/models/feedback-request";
import {CarService} from "../../../../services/services/car.service";
import {FeedbackService} from "../../../../services/services/feedback.service";
import {RentedCarResponse} from "../../../../services/models/rented-car-response";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-approve-returned-cars',
  templateUrl: './approve-returned-cars.component.html',
  styleUrl: './approve-returned-cars.component.scss'
})
export class ApproveReturnedCarsComponent {
  page = 0;
  size = 5;
  pages: any = [];
  rentedCars: PageResponseCarResponse = { content: [], totalPages: 0 };
  selectedCar: CarResponse | undefined = undefined;
  feedbackRequest: FeedbackRequest = { carId: 0, comment: '', note: 0 };
  constructor(
    private carService: CarService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private feedbackService: FeedbackService
  ) {
  }


  ngOnInit(): void {
    this.findAllRentedCars();
  }

  private findAllRentedCars() {
    this.carService.findAllMyReturnedCars({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (resp) => {
        this.rentedCars = resp;
        this.pages = Array(this.rentedCars.totalPages)
          .fill(0)
          .map((x, i) => i);
      }
    });
  }

  gotToPage(page: number) {
    this.page = page;
    this.findAllRentedCars();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllRentedCars();
  }

  goToPreviousPage() {
    this.page--;
    this.findAllRentedCars();
  }

  goToLastPage() {
    this.page = this.rentedCars.totalPages as number - 1;
    this.findAllRentedCars();
  }

  goToNextPage() {
    this.page++;
    this.findAllRentedCars();
  }

  get isLastPage() {
    return this.page === this.rentedCars.totalPages as number - 1;
  }

  returnRentedCars(car: RentedCarResponse) {
    this.selectedCar = car;
    this.feedbackRequest.carId = car.id as number;
  }

  approveReturnedRentedCar({car}: { car: any }) {

    console.log('Selected Car ID:', car.id);

    this.carService.approveReturnRentedCar({ 'car-id': car.id})
      .subscribe({
        next: () => {
          this.selectedCar = undefined;
          this.findAllRentedCars();
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  selectCar(car: CarResponse) {
    this.selectedCar = car;
  }

  private giveFeedback() {
    this.feedbackService.saveFeedback({
      body: this.feedbackRequest
    }).subscribe({
      next: () => {
        // handle success
      }
    });
  }
}
