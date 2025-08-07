import { Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HighlightcardDirective } from '../../directives/highlightcard.directive';
import { StaticProductsService } from '../../services/static-products.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule,FormsModule,HighlightcardDirective,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnChanges{
  Products:IProduct[] = [];
  @Input() catId = 0;
  @Output() calculatedPrice = new EventEmitter<number>();
  cardColors = 'red';
  today = Date.now();
  num = 4;
  constructor(private _staticProductsServices:StaticProductsService,private _router:Router){
    setInterval(() => {
      this.today = Date.now();
    },6000);
  }
  
  ngOnChanges(){
    this.Products = this._staticProductsServices.filterProductsWithCatId(this.catId);
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
}


