import {Component, OnInit} from '@angular/core';
import {PageResponseCarResponse} from "../../../../services/models/page-response-car-response";
import {ActivatedRoute, Router} from "@angular/router";
import {CarService} from "../../../../services/services/car.service";
import {CarResponse} from "../../../../services/models/car-response";
import {WaitingCarService} from "../../../../services/services/waiting-car.service";

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent implements OnInit{
  carResponse: PageResponseCarResponse = {};
  waitingList: CarResponse[] = [];
  page = 0;
  size = 4;
  pages: any = [];
  message = '';
  level: 'success' |'error' = 'success';
  carName: string = '';
  constructor(
    private carService: CarService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private waitingCarService: WaitingCarService
  ) {
  }
  ngOnInit(): void {
    this.findAllCars();
  }

  private findByCarName() {
    if (!this.carName) {
      this.message = 'Please enter a car name';
      this.level = 'error';
      return;
    }
    const carName = this.activatedRoute.snapshot.params['car-name'];
    this.carService.findByCarName({
      "car-name": carName
    })
      .subscribe({
        next: (cars) => {
          this.carResponse = cars;
          this.pages = Array(this.carResponse.totalPages)
            .fill(0)
            .map((x, i) => i);
        }
      });
  }

  private findAllCars() {
    this.carService.findAllCars({
      page: this.page,
      size: this.size
    })
      .subscribe({
        next: (cars) => {
          this.carResponse = cars;
          this.pages = Array(this.carResponse.totalPages)
            .fill(0)
            .map((x, i) => i);
        }
      });
  }

  gotToPage(page: number) {
    this.page = page;
    if (this.carName) {
      this.findByCarName();
    } else {
      this.findAllCars();
    }
  }

  goToFirstPage() {
    this.page = 0;
    if (this.carName) {
      this.findByCarName();
    } else {
      this.findAllCars();
    }
  }

  goToPreviousPage() {
    this.page --;
    if (this.carName) {
      this.findByCarName();
    } else {
      this.findAllCars();
    }
  }

  goToLastPage() {
    this.page = this.carResponse.totalPages as number - 1;
    if (this.carName) {
      this.findByCarName();
    } else {
      this.findAllCars();
    }
  }

  goToNextPage() {
    this.page++;
    if (this.carName) {
      this.findByCarName();
    } else {
      this.findAllCars();
    }
  }

  get isLastPage() {
    return this.page === this.carResponse.totalPages as number - 1;
  }

  rentCar(car: CarResponse) {
    this.message = '';
    this.level = 'success';
    this.carService.rentCar({
      'car-id': car.id as number
    }).subscribe({
      next: () => {
        this.level = 'success';
        this.message = 'Car successfully added to your list';
        this.router.navigate(["/cars/card-details"])
      },
      error: (err) => {
        console.log(err);
        this.level = 'error';
        this.message = err.error.error;
      }
    });
  }

  displayCarDetails(car: CarResponse) {
    console.log("Display by carId:"+car.id)
    this.router.navigate(['cars', 'details', car.id]);
  }




  addToCard(car: CarResponse) {
    this.waitingList.push(car);
    this.message = '';
    this.level = 'success';
    this.waitingCarService.addToWaitingList({
      'carId': car.id as number
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
    this.router.navigate(['cars', 'my-waiting-list']);
  }
}
