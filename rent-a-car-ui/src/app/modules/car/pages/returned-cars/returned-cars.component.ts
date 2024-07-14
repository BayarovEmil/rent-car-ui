import { Component } from '@angular/core';
import {CarService} from "../../../../services/services/car.service";
import {PageResponseCarResponse} from "../../../../services/models/page-response-car-response";
import {RentedCarResponse} from "../../../../services/models/rented-car-response";

@Component({
  selector: 'app-returned-cars',
  templateUrl: './returned-cars.component.html',
  styleUrl: './returned-cars.component.scss'
})
export class ReturnedCarsComponent {
  page = 0;
  size = 5;
  pages: any = [];
  returnedCars: PageResponseCarResponse = {};
  message = '';
  level: 'success' |'error' = 'success';
  constructor(
    private carService: CarService
  ) {
  }

  ngOnInit(): void {
    this.findAllReturnedCars();
  }

  private findAllReturnedCars() {
    this.carService.findAllReturnedCars({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (resp) => {
        this.returnedCars = resp;
        this.pages = Array(this.returnedCars.totalPages)
          .fill(0)
          .map((x, i) => i);
      }
    });
  }

  gotToPage(page: number) {
    this.page = page;
    this.findAllReturnedCars();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllReturnedCars();
  }

  goToPreviousPage() {
    this.page --;
    this.findAllReturnedCars();
  }

  goToLastPage() {
    this.page = this.returnedCars.totalPages as number - 1;
    this.findAllReturnedCars();
  }

  goToNextPage() {
    this.page++;
    this.findAllReturnedCars();
  }

  get isLastPage() {
    return this.page === this.returnedCars.totalPages as number - 1;
  }

  approveBookReturn(car: RentedCarResponse) {
    if (!car.returned) {
      return;
    }
    this.carService.approveReturnRentedCar({
      'car-id': car.id as number
    }).subscribe({
      next: () => {
        this.level = 'success';
        this.message = 'Car return approved';
        this.findAllReturnedCars();
      }
    });
  }
}
