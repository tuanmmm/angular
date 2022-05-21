import { Injectable } from '@angular/core';
import mockData from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProduct () {

  }
  getProducts () {
    return mockData;
  }
  removeProduct () {
    
  }
  addProduct () {
    
  }
  updateProduct () {
    
  }
}
