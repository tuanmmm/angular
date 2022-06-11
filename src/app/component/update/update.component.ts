import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/moder/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  product!:IProduct
  constructor(
    private productServices : ProductService,
    private activatedRouter : ActivatedRoute,
    private router : Router

  ) { }
  id!:any

  ngOnInit(): void {
    this.id = this.activatedRouter.snapshot.params['id']
    this.productServices.getProduct(this.id).subscribe((data) => this.product =data)
  }
  onUpdate(){
    this.productServices.updateProduct(this.product).subscribe(() =>{
      setTimeout(() => {
        this.router.navigate(["/product"]);  
    }, 2000);
      
    })
  }

}
