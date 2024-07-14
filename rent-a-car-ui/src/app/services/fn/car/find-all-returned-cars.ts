/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseRentedCarResponse } from '../../models/page-response-rented-car-response';

export interface FindAllReturnedCars$Params {
  page?: number;
  size?: number;
}

export function findAllReturnedCars(http: HttpClient, rootUrl: string, params?: FindAllReturnedCars$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseRentedCarResponse>> {
  const rb = new RequestBuilder(rootUrl, findAllReturnedCars.PATH, 'get');
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

findAllReturnedCars.PATH = '/car/returned';
