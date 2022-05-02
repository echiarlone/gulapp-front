import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-continue-float-button',
  templateUrl: './continue-float-button.component.html',
  styleUrls: ['./continue-float-button.component.scss']
})
export class ContinueFloatButtonComponent implements OnInit {

  constructor(
    private orderService: OrderService
  ) { }
  
  public hidden:boolean;
  public order:Order;

  ngOnInit(): void {

    this.order = this.orderService.getOrder();
    this.hidden = this.order.countProducts() == 0;

    this.orderService.getOrderChanges().subscribe(order => {
      this.order = order;
      this.hidden = this.order.countProducts() == 0;
    })
    
  }

}
