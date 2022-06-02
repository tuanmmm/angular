import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/moder/product'; 
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
   productList!:  IProduct[];
   constructor( private productService:ProductService) {
     this.showProduct();
   }

  ngOnInit(): void {
    }
   showProduct(){
     this.productService.getProducts().subscribe( data => {
         this.productList  = data  
     })
   }
   onRemove(id:number){
     // call api xoa
     this.productService.removeProduct(id).subscribe(() => {
     //reRemder
     this.productList = this.productList.filter(item => item.id !== id);
     });
   }
}
