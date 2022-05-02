import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { Product } from 'src/app/core/models/product';
import { OrderService } from 'src/app/core/services/order.service';
import { ProductPreviewComponent } from '../product-preview/product-preview.component';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.scss']
})
export class CategoryMenuComponent implements OnInit {

  @Input() category:any;
  
  constructor(
    private orderService:OrderService,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }

  public openInfoDialog(product:Product): void {
    let dialogRef = this.dialog.open(ProductPreviewComponent);
  }

}
