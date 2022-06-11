import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../app/pages/product/product.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { ProductDeltailComponent } from './component/product-deltail/product-deltail.component';
import { ProductsComponent } from './component/products/products.component';
import { UpdateComponent } from './component/update/update.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';


const routes: Routes = [ 
  {path: "", component:WebsiteLayoutComponent},
  // {path : "about" , component : ProductComponent},
  {path : "product" , component: ProductsComponent},
  {path : "product/add" , component: AddProductComponent},
  {path : "product/:id" , component: ProductDeltailComponent},
  {path : "product/edit/:id" , component: UpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
