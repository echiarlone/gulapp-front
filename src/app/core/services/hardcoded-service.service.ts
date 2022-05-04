import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Product } from '../models/product';
import { Categories } from 'src/app/hardcoded/categories';
import { Products } from 'src/app/hardcoded/products';

@Injectable({
  providedIn: 'root'
})
export class HardcodedServiceService {

  public categories:Category[];
  public products:Product[];

  constructor() { 
    this.categories = Categories.categories;
    this.products = Products.products;
  }

  public getCategories(){
    return 
  }
}
