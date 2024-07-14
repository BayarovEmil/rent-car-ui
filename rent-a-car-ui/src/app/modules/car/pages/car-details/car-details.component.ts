import {Component, OnInit} from '@angular/core';
import {PageResponseCarResponse} from "../../../../services/models/page-response-car-response";
import {CarResponse} from "../../../../services/models/car-response";
import {FeedbackRequest} from "../../../../services/models/feedback-request";
import {CarService} from "../../../../services/services/car.service";
import {FeedbackService} from "../../../../services/services/feedback.service";
import {RentedCarResponse} from "../../../../services/models/rented-car-response";
import {ActivatedRoute, Router} from "@angular/router";
import {PageResponseFeedbackResponse} from "../../../../services/models/page-response-feedback-response";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.scss'
})
export class CarDetailsComponent implements OnInit{
  page = 0;
  size = 5;
  pages: any = [];
  rentedCars: PageResponseCarResponse = { content: [], totalPages: 0 };
  feedbacks: PageResponseFeedbackResponse = { content: [], totalPages: 0 };
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
    this.findAllFeedbacks();
  }

  findAllFeedbacks() {
    const carId = this.activatedRoute.snapshot.params['carId'];

    this.feedbackService.findAllFeedbacks({
      'car-id': carId,
      page: this.page,
      size: this.size
    }).subscribe({
      next: (resp) => {
        this.feedbacks = resp;
        this.pages = Array(this.feedbacks.totalPages)
          .fill(0)
          .map((x, i) => i);
      },
      error: (err) => {
        console.log(err.error);
      }
    });
  }

  gotToPage(page: number) {
    this.page = page;
    this.findAllFeedbacks();
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllFeedbacks();
  }

  goToPreviousPage() {
    this.page--;
    this.findAllFeedbacks();
  }

  goToLastPage() {
    this.page = this.rentedCars.totalPages as number - 1;
    this.findAllFeedbacks();
  }

  goToNextPage() {
    this.page++;
    this.findAllFeedbacks();
  }

  get isLastPage() {
    return this.page === this.rentedCars.totalPages as number - 1;
  }

}
