import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/core/models/category';

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.scss']
})
export class RestaurantMenuComponent implements OnInit {

  public categories: Category[] = [
    {
      id: 1,
      name:"Pizzas", 
      meals: ["Pizza Margherita", "Pizza Napoletana", "Pizza Quattro Stagioni"]
    },
    { 
      id: 2,
      name:"Hamburguesas",
      meals: ["Hamburguesa de Pollo", "Hamburguesa de Res", "Hamburguesa de Cerdo"]},
    {
      id: 3,
      name:"Bebidas",
      meals: ["Coca Cola", "Fanta", "Sprite", "Agua"]
    },
    { 
      id: 4,
      name:"Postres",
      meals: ["Tiramisu", "Helado", "Pastel", "Brownie"]
    },
    { 
      id: 5,
      name: "Pastas",
      meals: ["Ñoquis", "Ravioles", "Sorrentinos"]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
