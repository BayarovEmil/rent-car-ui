import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CarResponse} from "../../../../services/models/car-response";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss'
})
export class CarCardComponent {
  private _car: CarResponse = {};
  private _manage = false;
  private _carCover: string | undefined;

  constructor(private router: Router, private route: ActivatedRoute) {}

  get carCover(): string | undefined {
    if (this._car.cover) {
      return 'data:image/jpg;base64,' + this._car.cover
    }
    return 'https://source.unsplash.com/user/c_v_r/1900x800';
  }

  get car(): CarResponse {
    return this._car;
  }

  @Input()
  set car(value: CarResponse) {
    this._car = value;
  }


  get manage(): boolean {
    return this._manage;
  }

  @Input()
  set manage(value: boolean) {
    this._manage = value;
  }



  @Output() private available: EventEmitter<CarResponse> = new EventEmitter<CarResponse>();
  @Output() private addToWaitingList: EventEmitter<CarResponse> = new EventEmitter<CarResponse>();
  @Output() private rent: EventEmitter<CarResponse> = new EventEmitter<CarResponse>();
  @Output() private edit: EventEmitter<CarResponse> = new EventEmitter<CarResponse>();
  @Output() private details: EventEmitter<CarResponse> = new EventEmitter<CarResponse>();

  onAvailable() {
    this.available.emit(this._car);
  }


  onAddToWaitingList() {
    this.addToWaitingList.emit(this._car);
  }

  onBorrow() {
    this.rent.emit(this._car);
  }

  onEdit() {
    this.edit.emit(this._car);
  }

  onShowDetails() {
    this.details.emit(this._car);
  }
}
