import { Component } from '@angular/core';
import { GetDiscountService } from '../../../core/services/get-discount.service';

@Component({
  selector: 'app-discount',
  standalone: false,
  templateUrl: './discount.component.html',
  styleUrl: './discount.component.css'
})
export class DiscountComponent {
  title:string = "This is a discount section";
  description:string = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi asperiores consectetur, recusandae ratione provident necessitatibus, cumque delectus commodi fuga praesentium beatae. Totam vel similique laborum dicta aperiam odit doloribus corporis';
  img:string = "discount.png";

  constructor(private getDiscountService:GetDiscountService){}

  getDiscount(event:Event,name:string,email:string,phone:string,description:string){
    event.preventDefault();
    this.getDiscountService.postDiscount({name,email,phone,description}).subscribe({
      next: (response) => {
        alert('Discount Request Sent');
        console.log(response);
      },
      error: (error) => {console.log(`Error Happend = > ${error}`);}
    })
  }
}
