import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Order } from '../models/order';
import { ProductQuantity } from '../models/productQuantity';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  private order: Subject<Order>;

  public pushProductQuantity(productQuantity:ProductQuantity){

  }
}
