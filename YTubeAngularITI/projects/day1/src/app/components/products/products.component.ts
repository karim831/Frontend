import { Component } from '@angular/core';
import { Store } from '../../models/store';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  store:Store;
  clientName: string;
  constructor(){
    this.store = new Store(
        "MY STORE",
        ["Zagazig","Mansoura","Fayoum"],
        "/favicon.ico"
    );

    this.clientName = "Mohamed";
  }
}
