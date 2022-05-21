import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  @Output() onAdd = new EventEmitter()
   product: {name : string , price : number} = {
     name : "",
     price: 0
   }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.product);
    
   this.onAdd.emit(this.product)
  }
}
