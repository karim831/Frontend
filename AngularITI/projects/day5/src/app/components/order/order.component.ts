import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from '../../components/products/products.component';
import { CommonModule } from '@angular/common';
import { ICategory } from '../../models/icategory';
import { StaticCategoriesService } from '../../services/static-categories.service';

@Component({
  selector: 'app-order',
  imports: [FormsModule,ProductsComponent,CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent{
  categories:ICategory[] = [];
  categorySelected:number = 0;  
  totalPrice:number = 0;
  @ViewChild("myInput") myInput!:ElementRef;
  @ViewChild(ProductsComponent) myProducts!:ProductsComponent;
  constructor(private _staticCategoriesService:StaticCategoriesService){
    this.categories = this._staticCategoriesService.getAllCategories();
  }

  assignTotalPrice(value:number){
    this.totalPrice += value;
  }

  ngAfterViewInit(){
    (this.myInput.nativeElement as HTMLInputElement).value = "Kareem";
  }
}
