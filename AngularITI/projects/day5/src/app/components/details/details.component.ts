import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../../models/iproduct';
import { StaticProductsService } from '../../services/static-products.service';
import { CurrencyPipe, Location} from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CurrencyPipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent implements OnInit{
  productIds:number[] = [];
  productIndex:number = 0;
  product!:IProduct | undefined;
  constructor(
    private _route:ActivatedRoute,
    private _staticProductService:StaticProductsService,
    private _location:Location,
    private _router:Router
  ){
    this.productIds = this._staticProductService.getProductsId();
  }

  ngOnInit(){
    this._route.paramMap.subscribe((params) => {
      this.product = this._staticProductService.getProductById(Number(params.get("id")));
    });
  }

  goBack(){
    this._location.back();
  }

  goNext(){
    let nextIndex = this.productIds.findIndex((id) => id === this.product?.id)+1;
    if(this.productIds[nextIndex]){
      this._router.navigate(['../',nextIndex],{relativeTo:this._route});
      this.productIndex = nextIndex;
    }
  }

  goPrevious(){
    let prevIndex = this.productIds.findIndex((id) => id === this.product?.id)-1;
    if(this.productIds[prevIndex] >= 0){
      this._router.navigate(['../',prevIndex],{relativeTo: this._route});
      this.productIndex = prevIndex;
    }
  }

  
}
