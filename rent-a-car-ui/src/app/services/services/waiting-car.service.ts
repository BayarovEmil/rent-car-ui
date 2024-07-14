/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { addToWaitingList } from '../fn/waiting-car/add-to-waiting-list';
import { AddToWaitingList$Params } from '../fn/waiting-car/add-to-waiting-list';
import { findAllWaitingCars } from '../fn/waiting-car/find-all-waiting-cars';
import { FindAllWaitingCars$Params } from '../fn/waiting-car/find-all-waiting-cars';
import { findCarId } from '../fn/waiting-car/find-car-id';
import { FindCarId$Params } from '../fn/waiting-car/find-car-id';
import { PageResponseCarResponse } from '../models/page-response-car-response';
import { removeFromWaitingList } from '../fn/waiting-car/remove-from-waiting-list';
import { RemoveFromWaitingList$Params } from '../fn/waiting-car/remove-from-waiting-list';

@Injectable({ providedIn: 'root' })
export class WaitingCarService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `addToWaitingList()` */
  static readonly AddToWaitingListPath = '/waiting/addToWaitingList/{carId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `addToWaitingList()` instead.
   *
   * This method doesn't expect any request body.
   */
  addToWaitingList$Response(params: AddToWaitingList$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return addToWaitingList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `addToWaitingList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  addToWaitingList(params: AddToWaitingList$Params, context?: HttpContext): Observable<number> {
    return this.addToWaitingList$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findCarId()` */
  static readonly FindCarIdPath = '/waiting/findCarId/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findCarId()` instead.
   *
   * This method doesn't expect any request body.
   */
  findCarId$Response(params: FindCarId$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return findCarId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findCarId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findCarId(params: FindCarId$Params, context?: HttpContext): Observable<number> {
    return this.findCarId$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `findAllWaitingCars()` */
  static readonly FindAllWaitingCarsPath = '/waiting/findAllWaitingCars';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `findAllWaitingCars()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllWaitingCars$Response(params?: FindAllWaitingCars$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseCarResponse>> {
    return findAllWaitingCars(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `findAllWaitingCars$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  findAllWaitingCars(params?: FindAllWaitingCars$Params, context?: HttpContext): Observable<PageResponseCarResponse> {
    return this.findAllWaitingCars$Response(params, context).pipe(
      map((r: StrictHttpResponse<PageResponseCarResponse>): PageResponseCarResponse => r.body)
    );
  }

  /** Path part for operation `removeFromWaitingList()` */
  static readonly RemoveFromWaitingListPath = '/waiting/removeFromWaitingList/{waitingId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `removeFromWaitingList()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeFromWaitingList$Response(params: RemoveFromWaitingList$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return removeFromWaitingList(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `removeFromWaitingList$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  removeFromWaitingList(params: RemoveFromWaitingList$Params, context?: HttpContext): Observable<number> {
    return this.removeFromWaitingList$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

}
