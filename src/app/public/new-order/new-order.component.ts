import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  constructor(
    private orderService: OrderService
  ) { }

  public orderIsEmpty: boolean = true;
  public order: Order;

  ngOnInit(): void {
    this.orderService.getOrderChanges().subscribe(order => {
      this.order = order;
      this.orderIsEmpty = this.order.countProducts() == 0;
    });
  }

  public productQuantity(): void { 

  }

}
