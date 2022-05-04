import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Category } from 'src/app/core/models/category';
import { Product } from 'src/app/core/models/product';
import { HardcodedServiceService } from 'src/app/core/services/hardcoded-service.service';
import { OrderService } from 'src/app/core/services/order.service';
import { ProductPreviewComponent } from '../product-preview/product-preview.component';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent implements OnInit {

  constructor(
    private dialog:MatDialog,
    private hardcoded:HardcodedServiceService
  ) { }

  @Input() categoryId:number;
  public category: Category;
  public products: Product[] = [];

  ngOnInit(): void {
    console.log(this.hardcoded.categories)
    this.products = this.hardcoded.products.filter(product => product.category == this.categoryId);
    this.category = this.hardcoded.categories.filter(category => category.id == this.categoryId)[0];
    console.log(this.category)
    console.log(this.products)
  }

  public openInfoDialog(product:Product): void {
    let dialogRef = this.dialog.open(ProductPreviewComponent);
    dialogRef.componentInstance.product = product;
    console.log(dialogRef)
  }

}
