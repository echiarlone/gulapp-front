import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodMenuComponent } from './public/food-menu/food-menu.component';

const routes: Routes = [
  {path: 'neworder', component:FoodMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
