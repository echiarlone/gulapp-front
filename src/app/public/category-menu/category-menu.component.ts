import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent implements OnInit {

  @Input() category:any;
  
  constructor(
    private orderService:OrderService
  ) { }

  ngOnInit(): void {
  }

  public addToOrder(meal){
    this.orderService.pushProductQuantity(meal);
  }

}
