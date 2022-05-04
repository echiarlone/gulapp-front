import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {

  constructor() { }

  @Input() product: Product;

  ngOnInit(): void {
  }

}
