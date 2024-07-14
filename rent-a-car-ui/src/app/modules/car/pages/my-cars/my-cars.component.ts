import { Component } from '@angular/core';
import {PageResponseCarResponse} from "../../../../services/models/page-response-car-response";
import {CarService} from "../../../../services/services/car.service";
import {Router} from "@angular/router";
import {CarResponse} from "../../../../services/models/car-response";
import {CarRequest} from "../../../../services/models/car-request";

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrl: './my-cars.component.scss'
})
export class MyCarsComponent {
  carResponse: PageResponseCarResponse = {};
  page = 0;
  size = 4;
  pages: any = [];

  constructor(
    private carService: CarService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.findAllCarsByOwner();
  }

  private findAllCarsByOwner() {
    this.carService.findAllByOwner({
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
    this.findAllCarsByOwner();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllCarsByOwner();
  }

  goToPreviousPage() {
    this.page --;
    this.findAllCarsByOwner();
  }

  goToLastPage() {
    this.page = this.carResponse.totalPages as number - 1;
    this.findAllCarsByOwner();
  }

  goToNextPage() {
    this.page++;
    this.findAllCarsByOwner();
  }

  get isLastPage() {
    return this.page === this.carResponse.totalPages as number - 1;
  }


  availableCar(car: CarResponse) {
    this.carService.updateAvailableStatus({
      'car-id': car.id as number
    }).subscribe({
      next: () => {
        car.available = !car.available;
      }
    });
  }

  editCar(car: CarResponse) {
    this.router.navigate(['cars', 'update', car.id]);
  }
}
