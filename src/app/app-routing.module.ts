import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewOrderComponent } from './public/new-order/new-order.component';
const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'neworder', pathMatch: 'full' },
      { path: 'neworder', component: NewOrderComponent },
    ],
  },

  /* {path: '', redirectTo: '/neworder',},
   */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
