import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  constructor() { }

  public orderIsEmpty: boolean = true;
  public order: Order;

  ngOnInit(): void {
  }

  public productQuantity(): void { 

  }

}
