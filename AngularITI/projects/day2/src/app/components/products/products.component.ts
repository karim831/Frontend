import { Component} from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { ICategory } from '../../models/icategory';


@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products:IProduct[] = [];
  categories: ICategory[] = [];
  categorySelected:number = 1;  
  totalPrice:number = 0;
  test = 0;
  constructor(){
    this.products = [
      {
        id: 0,
        name: "Lenovo",
        price: 10000,
        quantity: 3,
        imgUrl: "images/labtop.png",
        catId: 1
      },
      {
        id: 1,
        name: "Dell",
        price: 20000,
        quantity: 2,
        imgUrl: "images/labtop.png",
        catId: 1
      },
      {
        id: 2,
        name: "ChairGaming",
        price: 1000,
        quantity: 1,
        imgUrl: "images/labtop.png",
        catId: 2
      },
      {
        id: 3,
        name: "Oppo",
        price: 5000,
        quantity: 5,
        imgUrl: "images/labtop.png",
        catId: 3
      },
      {
        id: 4,
        name: "Sumsung",
        price: 7000,
        quantity: 3,
        imgUrl: "images/labtop.png",
        catId: 3
      },
      {
        id: 5,
        name: "Hp",
        price: 20000,
        quantity: 1,
        imgUrl: "images/labtop.png",
        catId: 1
      }
    ];


    this.categories = [
      {id:1,name:"Labtops"},
      {id:3,name:"Phones"},
      {id:2,name:"Accessories"},
    ];
  }
  
  updateTempPrice(product: IProduct){
    product.tmpTotalPrice = product.price * (product.tmpTotalQuantity || 0.00);
  }


  buy(product: IProduct){
    if(product && product.tmpTotalQuantity && product.tmpTotalQuantity <= product.quantity){
        this.totalPrice += product.tmpTotalQuantity * product.price;
        product.quantity -= product.tmpTotalQuantity;
    }
  }

  trackProduct(index:number,item:IProduct){
      return item.id;
  }
}
