import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/moder/product';
import {ProductService} from 'src/app/services/product.service';

@Component({
  selector: 'app-product-deltail',
  templateUrl: './product-deltail.component.html',
  styleUrls: ['./product-deltail.component.css']
})
export class ProductDeltailComponent implements OnInit {
  ProductDetail! : IProduct
  constructor(
    private router : ActivatedRoute,
    private productService : ProductService
    ) { 
    const id = this.router.snapshot.paramMap.get('id')!;
    this.productService.getProduct(+id).subscribe((data)=>{
      this.ProductDetail = data
    })

  }

  ngOnInit(): void {
  }

}
