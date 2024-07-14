import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {CarListComponent} from "./pages/car-list/car-list.component";
import {MyCarsComponent} from "./pages/my-cars/my-cars.component";
import {ManageCarComponent} from "./pages/manage-car/manage-car.component";
import {RentedCarListComponent} from "./pages/rented-car-list/rented-car-list.component";
import {ReturnedCarsComponent} from "./pages/returned-cars/returned-cars.component";
import {UpdateCarComponent} from "./pages/update-car/update-car.component";
import {MyWaitingListComponent} from "./pages/my-waiting-list/my-waiting-list.component";
import {ApproveReturnedCarsComponent} from "./pages/approve-returned-cars/approve-returned-cars.component";
import {AllCarListComponent} from "./pages/all-car-list/all-car-list.component";
import {authGuard} from "../../services/guard/auth.guard";
import {CarDetailsComponent} from "./pages/car-details/car-details.component";
import {CardDetailsComponent} from "./pages/card-details/card-details.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    canActivate: [authGuard],
    children: [
      // {
      //   path: '',
      //   component: AllCarListComponent
      // },
      {
        path: '',
        component: CarListComponent,
        canActivate: [authGuard]
      },
      {
        path: 'card-details',
        component: CardDetailsComponent
      },
      {
        path: 'my-cars',
        component: MyCarsComponent,
        canActivate: [authGuard]
      },
      {
        path: 'my-rented-cars',
        component: RentedCarListComponent,
        canActivate: [authGuard]
      },
      {
        path: 'my-returned-cars',
        component: ReturnedCarsComponent,
        canActivate: [authGuard]
      },
      {
        path: 'my-waiting-list',
        component: MyWaitingListComponent,
        canActivate: [authGuard]
      },
      {
        path: 'details/:carId',
        component: CarDetailsComponent,
        canActivate: [authGuard]
      },
      {
        path: 'update/:carId',
        component: UpdateCarComponent,
        canActivate: [authGuard]
      },
      {
        path: 'returned-cars',
        component: ApproveReturnedCarsComponent,
        canActivate: [authGuard]
      },
      {
        path: 'manage',
        component: ManageCarComponent,
        canActivate: [authGuard]
      },
      {
        path: 'manage/:carId',
        component: ManageCarComponent,
        canActivate: [authGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
