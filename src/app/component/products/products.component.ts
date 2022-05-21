import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/moder/product'; 
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input ('data') productList!:  IProduct[];
  productDeail!: IProduct; 
  constructor() { }

  ngOnInit(): void {
  }
  showDetail(id: number) {
    this.productDeail = this.productList.find(item => item.id === id)!;
  }
}
