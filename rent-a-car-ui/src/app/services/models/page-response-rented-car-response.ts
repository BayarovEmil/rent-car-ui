/* tslint:disable */
/* eslint-disable */
import { RentedCarResponse } from '../models/rented-car-response';
export interface PageResponseRentedCarResponse {
  content?: Array<RentedCarResponse>;
  first?: boolean;
  last?: boolean;
  number?: number;
  size?: number;
  totalElements?: number;
  totalPages?: number;
}
