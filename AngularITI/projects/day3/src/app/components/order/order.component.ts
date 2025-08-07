import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../../components/products/products.component';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../models/icategory';

@Component({
  selector: 'app-order',
  imports: [FormsModule,ProductsComponent,CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  categories: ICategory[] = [];
  categorySelected:number = 0;  
  totalPrice:number = 0;

  constructor(){
    this.categories = [
      {id:1,name:"Labtops"},
      {id:3,name:"Phones"},
      {id:2,name:"Accessories"},
    ];
  }

  assignTotalPrice(value:number){
    this.totalPrice += value;
  }
}
