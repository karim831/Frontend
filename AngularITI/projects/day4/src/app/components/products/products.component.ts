import { Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HighlightcardDirective } from '../../directives/highlightcard.directive';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,HighlightcardDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges{
  products:IProduct[] = [];
  filteredProducts:IProduct[] = [];
  @Input() catId = 0;
  @Output() calculatedPrice = new EventEmitter<number>();
  cardColors = 'red';
  today = Date.now();
  num = 4;
  constructor(){
    setInterval(() => {
      this.today = Date.now();
    },6000);
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
    this.filterProducts(); 
  }
  
  ngOnChanges(){
    this.filterProducts();
  }

  updateTempPrice(product: IProduct){
    product.tmpTotalPrice = product.price * (product.tmpTotalQuantity || 0.00);
  }


  buy(product: IProduct){
    if(product && product.tmpTotalQuantity && product.tmpTotalQuantity <= product.quantity){
        product.quantity -= product.tmpTotalQuantity;
        this.calculatedPrice.emit(product.tmpTotalQuantity * product.price);
    }
  }

  trackProduct(index:number,item:IProduct){
    return item.id;
  }


  changeMouseOverColor(color: string){
    this.cardColors = color;
  }

  filterProducts(){
    if(this.catId === 0)
        this.filteredProducts = this.products;
    else
      this.filteredProducts = this.products.filter((product) => product.catId === this.catId);
  }
}


