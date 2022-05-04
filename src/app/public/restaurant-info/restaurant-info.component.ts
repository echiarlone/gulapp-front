import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.scss']
})
export class RestaurantInfoComponent implements OnInit {

  constructor() { }

  @Input('restaurant') restaurant:any;

  public name:string = "Sabor a Pampaaaa xd XDDD";
  public address:string = "Pellegrini 230";
  public isClosed:string;
  public schedules:string;
  public category:string;

  ngOnInit(): void {
  }

}
