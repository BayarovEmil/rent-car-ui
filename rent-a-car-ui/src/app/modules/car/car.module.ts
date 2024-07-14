import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { CarListComponent } from './pages/car-list/car-list.component';
import { CarCardComponent } from './components/car-card/car-card.component';
import { RatingComponent } from './components/rating/rating.component';
import { MyCarsComponent } from './pages/my-cars/my-cars.component';
import { ManageCarComponent } from './pages/manage-car/manage-car.component';
import {FormsModule} from "@angular/forms";
import { RentedCarListComponent } from './pages/rented-car-list/rented-car-list.component';
import { ReturnedCarsComponent } from './pages/returned-cars/returned-cars.component';
import { UpdateCarComponent } from './pages/update-car/update-car.component';
import { MyWaitingListComponent } from './pages/my-waiting-list/my-waiting-list.component';
import { ApproveReturnedCarsComponent } from './pages/approve-returned-cars/approve-returned-cars.component';
import { AllCarListComponent } from './pages/all-car-list/all-car-list.component';
import { CarDetailsComponent } from './pages/car-details/car-details.component';


@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    CarListComponent,
    CarCardComponent,
    RatingComponent,
    MyCarsComponent,
    ManageCarComponent,
    RentedCarListComponent,
    ReturnedCarsComponent,
    UpdateCarComponent,
    MyWaitingListComponent,
    ApproveReturnedCarsComponent,
    AllCarListComponent,
    CarDetailsComponent
  ],
    imports: [
        CommonModule,
        CarRoutingModule,
        FormsModule
    ]
})
export class CarModule { }
