import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../app/pages/product/product.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { ProductDeltailComponent } from './component/product-deltail/product-deltail.component';


const routes: Routes = [ 
  {path : "about" , component : ProductComponent},
  {path : "product/:id" , component: ProductDeltailComponent},
  {path : "product/add" , component: AddProductComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
