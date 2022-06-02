import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/moder/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: IProduct = {
    name: "",
    price: 0,
    status:true
    
  }
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.product);
    this.productService.addProduct(this.product).subscribe(data => {
               
    })
    //  this.onAdd.emit(this.product)

  }
}
