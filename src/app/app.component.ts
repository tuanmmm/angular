import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  
  productName :string =" Product A" ;
  productPrice : number = 100;
  productStatus : boolean = false ;

  productInfo : { id : number , name : string , price : number , status : boolean } ={
    id : 1,
    name : "product A",
    price : 100,
    status: false 
  }

  productList : { id : number , name : string , price : number , status : boolean } []  =[
     {
      id : 1,
      name : "product A",
      price : 100,
      status: false 
     },{
       id : 2,
    name : "product B",
    price : 100,
    status: true
     }
      
  ]

  onHandleClick(){
    this.productStatus= !this.productStatus
  }
  removeProduct(id: number){
    console.log(id)
    this.productList =  this.productList.filter(product => product.id !== id);
  }

  onHandleKeypress(event : any){
    this.title = event.target.value;
  }

  

}
