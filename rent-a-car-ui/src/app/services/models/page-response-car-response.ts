/* tslint:disable */
/* eslint-disable */
import {RentedCarResponse} from "./rented-car-response";
export interface PageResponseCarResponse {
  content?: Array<RentedCarResponse>;
  first?: boolean;
  last?: boolean;
  number?: number;
  size?: number;
  totalElements?: number;
  totalPages?: number;
}
