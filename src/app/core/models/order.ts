import { ProductQuantity } from "./productQuantity";
import { Product } from "./product";

export class Order{

    public id: number;
    public productQuantities: ProductQuantity[];
    public price: number;

    public changeOrder(productQuantity:ProductQuantity){

        let meal = this.productQuantities.find(meal => meal.product.id == productQuantity.product.id);

        if(meal){
            meal.quantity == 0 ? meal.quantity = 0 : meal.quantity += productQuantity.quantity;
        }else{
            this.productQuantities.push(productQuantity);
        }
    }
    
}

