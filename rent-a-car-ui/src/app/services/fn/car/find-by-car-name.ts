/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseCarResponse } from '../../models/page-response-car-response';

export interface FindByCarName$Params {
  'car-name': string;
  page?: number;
  size?: number;
}

export function findByCarName(http: HttpClient, rootUrl: string, params: FindByCarName$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseCarResponse>> {
  const rb = new RequestBuilder(rootUrl, findByCarName.PATH, 'get');
  if (params) {
    rb.query('car-name', params['car-name'], {});
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseCarResponse>;
    })
  );
}

findByCarName.PATH = '/car/findByCarName/{car-name}';
