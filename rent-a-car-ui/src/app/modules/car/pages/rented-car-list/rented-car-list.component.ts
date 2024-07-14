import {Component, OnInit} from "@angular/core";
import {PageResponseCarResponse} from "../../../../services/models/page-response-car-response";
import {CarResponse} from "../../../../services/models/car-response";
import {FeedbackRequest} from "../../../../services/models/feedback-request";
import {CarService} from "../../../../services/services/car.service";
import {FeedbackService} from "../../../../services/services/feedback.service";
import {RentedCarResponse} from "../../../../services/models/rented-car-response";


@Component({
  selector: 'app-rented-car-list',
  templateUrl: './rented-car-list.component.html',
  styleUrls: ['./rented-car-list.component.scss']
})
export class RentedCarListComponent implements OnInit {
  page = 0;
  size = 5;
  pages: any = [];
  rentedCars: PageResponseCarResponse = { content: [], totalPages: 0 };
  selectedCar: CarResponse | undefined = undefined;
  feedbackRequest: FeedbackRequest = { carId: 0, comment: '', note: 0 };

  constructor(
    private carService: CarService,
    private feedbackService: FeedbackService
  ) {}

  ngOnInit(): void {
    this.findAllRentedCars();
  }

  private findAllRentedCars() {
    this.carService.findAllRentedCars({
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
    console.log("car id is::"+car.id)
    this.selectedCar = car;
    this.feedbackRequest.carId = car.id as number;
  }

  returnCar(withFeedback: boolean) {
    this.carService.returnRentedCar({
      'car-id': this.selectedCar?.id as number
    }).subscribe({
      next: () => {
        if (withFeedback) {
          this.giveFeedback();
        }
        this.selectedCar = undefined;
        this.findAllRentedCars();
      }
    });
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
