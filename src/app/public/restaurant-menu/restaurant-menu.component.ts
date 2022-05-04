import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category';
import { Order } from 'src/app/core/models/order';
import { HardcodedServiceService } from 'src/app/core/services/hardcoded-service.service';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {

  @Input() order: Order;

  public categories: Category[];
  constructor(
    private hardcoded: HardcodedServiceService
  ) { }

  ngOnInit(): void {
    this.categories = this.hardcoded.categories;
  }

}
