import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/moder/product';
import mockData from '../../../data'
@Component({
  selector: 'app-product-deltail',
  templateUrl: './product-deltail.component.html',
  styleUrls: ['./product-deltail.component.css']
})
export class ProductDeltailComponent implements OnInit {
  ProductDetail! : IProduct
  constructor(private router : ActivatedRoute) { 
    const id = this.router.snapshot.paramMap.get('id')!;
    this.ProductDetail = mockData.find(item => item.id == +id)!;


  }

  ngOnInit(): void {
  }

}
