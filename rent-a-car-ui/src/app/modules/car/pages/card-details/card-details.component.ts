import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrl: './card-details.component.scss'
})
export class CardDetailsComponent {

  constructor(
    private router: Router
  ) {
  }
  goToPayment() {
    console.log("Odenis tamamlandi!")
    this.router.navigate(["cars/"])
  }
}
