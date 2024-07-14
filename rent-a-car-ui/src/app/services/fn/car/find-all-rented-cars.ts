/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseRentedCarResponse } from '../../models/page-response-rented-car-response';

export interface FindAllRentedCars$Params {
  page?: number;
  size?: number;
}

export function findAllRentedCars(http: HttpClient, rootUrl: string, params?: FindAllRentedCars$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseRentedCarResponse>> {
  const rb = new RequestBuilder(rootUrl, findAllRentedCars.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseRentedCarResponse>;
    })
  );
}

findAllRentedCars.PATH = '/car/rented';
