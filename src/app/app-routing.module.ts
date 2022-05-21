import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from '../app/pages/product/product.component';
import { ProductDeltailComponent } from './component/product-deltail/product-deltail.component';


const routes: Routes = [ 
  {path : "about" , component : ProductComponent},
  {path : "product/:id" , component: ProductDeltailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
