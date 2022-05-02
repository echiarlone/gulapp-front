import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Order } from '../models/order';
import { ProductQuantity } from '../models/productQuantity';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
  
  private order: Order = new Order([]);
  private orderSubject: Subject<Order> = new Subject<Order>();

  public openAddProductWindow(ProductId:ProductQuantity){

  }

  public getOrder(): Order {
    return this.order;
  }

  public getOrderChanges():Observable<Order>{
    return this.orderSubject.asObservable();
  }

  public changeOrder(product:ProductQuantity){
    console.log(product);
    this.order.changeOrder(product.product.id, product.quantity);
    this.orderSubject.next(this.order);
    console.log(this.order);
  }

  public deleteProduct(id:number) {
    this.order.deleteProduct(id);
    this.orderSubject.next(this.order);
  }

  public addProduct(product:ProductQuantity){
   
    this.order.addProduct(product);
    this.orderSubject.next(this.order);
    
  }
}
