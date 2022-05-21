import { Component } from '@angular/core';
import mockData from 'src/data';
import { IProduct } from './moder/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  productList : IProduct[] = mockData;
  onHandleAdd(product:any){
    this.productList.push(product)
     
  }



}
