import { ProductQuantity } from "./productQuantity";
import { Product } from "./product";

export class Order{

    public id: number;
    public productQuantities: ProductQuantity[];
    public price: number;

    constructor(productQuantities: ProductQuantity[]){
        this.id = Math.random();
        this.productQuantities = productQuantities;
    }

    public changeOrder(productId:number, quantity:number){

        let meal = this.productQuantities.find(meal => meal.product.id == productId);

        if(meal){
            meal.quantity = quantity;
        }else{
            this.productQuantities.push(meal);
        }
    }
    
    public deleteProduct(id:number){
        this.productQuantities = this.productQuantities.filter(meal => meal.product.id != id);
    }
    
    public addProduct(productQuantity:ProductQuantity){
        this.productQuantities.push(productQuantity);
    }

    public countProducts():number {
        return this.productQuantities.length;
    }
}   

