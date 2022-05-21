import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/moder/product'; 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   productList!:  IProduct[];
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
