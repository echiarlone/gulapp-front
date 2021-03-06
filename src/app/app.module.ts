import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/header/header.component';
import { FooterComponent } from './public/footer/footer.component';
import { NewOrderComponent } from './public/new-order/new-order.component';
import { RestaurantInfoComponent } from './public/restaurant-info/restaurant-info.component';
import { RestaurantMenuComponent } from './public/restaurant-menu/restaurant-menu.component';
import { CategoryMenuComponent } from './public/category-menu/category-menu.component';
import { ContinueFloatButtonComponent } from './public/continue-float-button/continue-float-button.component';
import { ProductPreviewComponent } from './public/product-preview/product-preview.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewOrderComponent,
    RestaurantInfoComponent,
    RestaurantMenuComponent,
    CategoryMenuComponent,
    ContinueFloatButtonComponent,
    ProductPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
