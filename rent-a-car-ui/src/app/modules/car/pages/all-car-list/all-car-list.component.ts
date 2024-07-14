import { Component } from '@angular/core';
import {PageResponseCarResponse} from "../../../../services/models/page-response-car-response";
import {CarService} from "../../../../services/services/car.service";
import {Router} from "@angular/router";
import {CarResponse} from "../../../../services/models/car-response";

@Component({
  selector: 'app-all-car-list',
  templateUrl: './all-car-list.component.html',
  styleUrl: './all-car-list.component.scss'
})
export class AllCarListComponent {
  carResponse: PageResponseCarResponse = {};
  waitingList: CarResponse[] = [];
  page = 0;
  size = 4;
  pages: any = [];
  message = '';
  level: 'success' |'error' = 'success';

  constructor(
    private carService: CarService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.findAllCars();
  }

  private findAllCars() {
    this.carService.findAllCars({
      page: this.page,
      size: this.size
    })
      .subscribe({
        next: (books) => {
          this.carResponse = books;
          this.pages = Array(this.carResponse.totalPages)
            .fill(0)
            .map((x, i) => i);
        }
      });
  }

  gotToPage(page: number) {
    this.page = page;
    this.findAllCars();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllCars();
  }

  goToPreviousPage() {
    this.page --;
    this.findAllCars();
  }

  goToLastPage() {
    this.page = this.carResponse.totalPages as number - 1;
    this.findAllCars();
  }

  goToNextPage() {
    this.page++;
    this.findAllCars();
  }

  get isLastPage() {
    return this.page === this.carResponse.totalPages as number - 1;
  }

  rentCar(car: CarResponse) {
    console.log("sdvkj")
    this.message = '';
    this.level = 'success';
    this.carService.rentCar({
      'car-id': car.id as number
    }).subscribe({
      next: () => {
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

  displayCarDetails(car: CarResponse) {
    this.router.navigate(['cars', 'details', car.id]);
  }

  addToCard(car: CarResponse) {
    console.log("sdvkj")
    this.waitingList.push(car);
    this.router.navigate(['cars', 'my-waiting-list',car.id]);
  }
}
