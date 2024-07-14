/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { approveReturnRentedCar } from '../fn/car/approve-return-rented-car';
import { ApproveReturnRentedCar$Params } from '../fn/car/approve-return-rented-car';
import { CarResponse } from '../models/car-response';
import { findAll } from '../fn/car/find-all';
import { FindAll$Params } from '../fn/car/find-all';
import { findAllByOwner } from '../fn/car/find-all-by-owner';
import { FindAllByOwner$Params } from '../fn/car/find-all-by-owner';
import { findAllCars } from '../fn/car/find-all-cars';
import { FindAllCars$Params } from '../fn/car/find-all-cars';
import { findAllMyReturnedCars } from '../fn/car/find-all-my-returned-cars';
import { FindAllMyReturnedCars$Params } from '../fn/car/find-all-my-returned-cars';
import { findAllRentedCars } from '../fn/car/find-all-rented-cars';
import { FindAllRentedCars$Params } from '../fn/car/find-all-rented-cars';
import { findAllReturnedCars } from '../fn/car/find-all-returned-cars';
import { FindAllReturnedCars$Params } from '../fn/car/find-all-returned-cars';
import { findByCarName } from '../fn/car/find-by-car-name';
import { FindByCarName$Params } from '../fn/car/find-by-car-name';
import { findById } from '../fn/car/find-by-id';
import { FindById$Params } from '../fn/car/find-by-id';
import { PageResponseCarResponse } from '../models/page-response-car-response';
import { PageResponseRentedCarResponse } from '../models/page-response-rented-car-response';
import { rentCar } from '../fn/car/rent-car';
import { RentCar$Params } from '../fn/car/rent-car';
import { returnRentedCar } from '../fn/car/return-rented-car';
import { ReturnRentedCar$Params } from '../fn/car/return-rented-car';
import { saveCar } from '../fn/car/save-car';
import { SaveCar$Params } from '../fn/car/save-car';
import { updateAvailableStatus } from '../fn/car/update-available-status';
import { UpdateAvailableStatus$Params } from '../fn/car/update-available-status';
import { updateCar } from '../fn/car/update-car';
import { UpdateCar$Params } from '../fn/car/update-car';
import { uploadCarCoverPicture } from '../fn/car/upload-car-cover-picture';
import { UploadCarCoverPicture$Params } from '../fn/car/upload-car-cover-picture';

@Injectable({ providedIn: 'root' })
export class CarService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `updateCar()` */
  static readonly UpdateCarPath = '/car/update/{car-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCar$Response(params: UpdateCar$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateCar(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateCar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCar(params: UpdateCar$Params, context?: HttpContext): Observable<number> {
    return this.updateCar$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `saveCar()` */
  static readonly SaveCarPath = '/car';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `saveCar()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCar$Response(params: SaveCar$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return saveCar(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `saveCar$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  saveCar(params: SaveCar$Params, context?: HttpContext): Observable<number> {
    return this.saveCar$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `returnRentedCar()` */
  static readonly ReturnRentedCarPath = '/car/rent/return/{car-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `returnRentedCar()` instead.
   *
   * This method doesn't expect any request body.
   */
  returnRentedCar$Response(params: ReturnRentedCar$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return returnRentedCar(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `returnRentedCar$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  returnRentedCar(params: ReturnRentedCar$Params, context?: HttpContext): Observable<number> {
    return this.returnRentedCar$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `uploadCarCoverPicture()` */
  static readonly UploadCarCoverPicturePath = '/car/cover/{car-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadCarCoverPicture()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadCarCoverPicture$Response(params: UploadCarCoverPicture$Params, context?: HttpContext): Observable<StrictHttpResponse<{
}>> {
    return uploadCarCoverPicture(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadCarCoverPicture$Response()` instead.
   *
   * This method sends `multipart/form-data` and handles request body of type `multipart/form-data`.
   */
  uploadCarCoverPicture(params: UploadCarCoverPicture$Params, context?: HttpContext): Observable<{
}> {
    return this.uploadCarCoverPicture$Response(params, context).pipe(
      map((r: StrictHttpResponse<{
}>): {
} => r.body)
    );
  }

  /** Path part for operation `updateAvailableStatus()` */
  static readonly UpdateAvailableStatusPath = '/car/available/{car-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateAvailableStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateAvailableStatus$Response(params: UpdateAvailableStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return updateAvailableStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updateAvailableStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  updateAvailableStatus(params: UpdateAvailableStatus$Params, context?: HttpContext): Observable<number> {
    return this.updateAvailableStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findById()` */
  static readonly FindByIdPath = '/car/{car_id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findById()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById$Response(params: FindById$Params, context?: HttpContext): Observable<StrictHttpResponse<CarResponse>> {
    return findById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findById(params: FindById$Params, context?: HttpContext): Observable<CarResponse> {
    return this.findById$Response(params, context).pipe(
      map((r: StrictHttpResponse<CarResponse>): CarResponse => r.body)
    );
  }

  /** Path part for operation `findAllReturnedCars()` */
  static readonly FindAllReturnedCarsPath = '/car/returned';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllReturnedCars()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllReturnedCars$Response(params?: FindAllReturnedCars$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseRentedCarResponse>> {
    return findAllReturnedCars(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllReturnedCars$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllReturnedCars(params?: FindAllReturnedCars$Params, context?: HttpContext): Observable<PageResponseRentedCarResponse> {
    return this.findAllReturnedCars$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseRentedCarResponse>): PageResponseRentedCarResponse => r.body)
    );
  }

  /** Path part for operation `findAllRentedCars()` */
  static readonly FindAllRentedCarsPath = '/car/rented';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllRentedCars()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllRentedCars$Response(params?: FindAllRentedCars$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseRentedCarResponse>> {
    return findAllRentedCars(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllRentedCars$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllRentedCars(params?: FindAllRentedCars$Params, context?: HttpContext): Observable<PageResponseRentedCarResponse> {
    return this.findAllRentedCars$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseRentedCarResponse>): PageResponseRentedCarResponse => r.body)
    );
  }

  /** Path part for operation `rentCar()` */
  static readonly RentCarPath = '/car/rent/{car-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `rentCar()` instead.
   *
   * This method doesn't expect any request body.
   */
  rentCar$Response(params: RentCar$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return rentCar(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `rentCar$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  rentCar(params: RentCar$Params, context?: HttpContext): Observable<number> {
    return this.rentCar$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `approveReturnRentedCar()` */
  static readonly ApproveReturnRentedCarPath = '/car/rent/return/approve/{car-id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `approveReturnRentedCar()` instead.
   *
   * This method doesn't expect any request body.
   */
  approveReturnRentedCar$Response(params: ApproveReturnRentedCar$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return approveReturnRentedCar(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `approveReturnRentedCar$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  approveReturnRentedCar(params: ApproveReturnRentedCar$Params, context?: HttpContext): Observable<number> {
    return this.approveReturnRentedCar$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findAllByOwner()` */
  static readonly FindAllByOwnerPath = '/car/owner';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllByOwner()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByOwner$Response(params?: FindAllByOwner$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseCarResponse>> {
    return findAllByOwner(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllByOwner$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllByOwner(params?: FindAllByOwner$Params, context?: HttpContext): Observable<PageResponseCarResponse> {
    return this.findAllByOwner$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseCarResponse>): PageResponseCarResponse => r.body)
    );
  }

  /** Path part for operation `findByCarName()` */
  static readonly FindByCarNamePath = '/car/findByCarName/{car-name}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findByCarName()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCarName$Response(params: FindByCarName$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseCarResponse>> {
    return findByCarName(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findByCarName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findByCarName(params: FindByCarName$Params, context?: HttpContext): Observable<PageResponseCarResponse> {
    return this.findByCarName$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseCarResponse>): PageResponseCarResponse => r.body)
    );
  }

  /** Path part for operation `findAllCars()` */
  static readonly FindAllCarsPath = '/car/findAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllCars()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllCars$Response(params?: FindAllCars$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseCarResponse>> {
    return findAllCars(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllCars$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllCars(params?: FindAllCars$Params, context?: HttpContext): Observable<PageResponseCarResponse> {
    return this.findAllCars$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseCarResponse>): PageResponseCarResponse => r.body)
    );
  }

  /** Path part for operation `findAllMyReturnedCars()` */
  static readonly FindAllMyReturnedCarsPath = '/car/findAllMyReturnedCars';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllMyReturnedCars()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllMyReturnedCars$Response(params?: FindAllMyReturnedCars$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseRentedCarResponse>> {
    return findAllMyReturnedCars(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllMyReturnedCars$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllMyReturnedCars(params?: FindAllMyReturnedCars$Params, context?: HttpContext): Observable<PageResponseRentedCarResponse> {
    return this.findAllMyReturnedCars$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseRentedCarResponse>): PageResponseRentedCarResponse => r.body)
    );
  }

  /** Path part for operation `findAll()` */
  static readonly FindAllPath = '/car/findAllCars';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll$Response(params?: FindAll$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseCarResponse>> {
    return findAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAll(params?: FindAll$Params, context?: HttpContext): Observable<PageResponseCarResponse> {
    return this.findAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseCarResponse>): PageResponseCarResponse => r.body)
    );
  }

}
