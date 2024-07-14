import {Component, OnInit} from '@angular/core';
import {CarRequest} from "../../../../services/models/car-request";
import {CarService} from "../../../../services/services/car.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-manage-car',
  templateUrl: './manage-car.component.html',
  styleUrl: './manage-car.component.scss'
})
export class ManageCarComponent implements OnInit {
  errorMsg: Array<string> = [];
  carRequest: CarRequest = {
    brand: '',
    model: '',
    fuelType: '',
    capacity: 0,
    dailyRentalRate: 0,
    manufacturingYear: 0
  };
  selectedCarCover: any;
  selectedPicture: string | undefined;

  constructor(
    private carService: CarService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const carId = this.activatedRoute.snapshot.params['carId'];
    if (carId) {
      this.carService.findById({
        'car_id': carId
      }).subscribe({
        next: (car) => {
          this.carRequest = {
            id: car.id,
            brand: car.brand as string,
            owner: car.owner as string,
            model: car.model as string,
            fuelType: car.fuelType as string,
            available: car.available
          };
          this.selectedPicture='data:image/jpg;base64,' + car.cover;
        }
      });
    }
  }

  saveCar() {
    this.carService.saveCar({
      body: this.carRequest
    }).subscribe({
      next: (carId) => {
        this.carService.uploadCarCoverPicture({
          'car-id': carId,
          body: {
            file: this.selectedCarCover
          }
        }).subscribe({
          next: () => {
            this.router.navigate(['/cars/my-cars']);
          }
        });
      },
      error: (err) => {
        console.log(err.error);
        this.errorMsg = err.error.validationErrors;
      }
    });
  }

  onFileSelected(event: any) {
    this.selectedCarCover = event.target.files[0];
    console.log(this.selectedCarCover);

    if (this.selectedCarCover) {

      const reader = new FileReader();
      reader.onload = () => {
        this.selectedPicture = reader.result as string;
      };
      reader.readAsDataURL(this.selectedCarCover);
    }
  }
}
