import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductsComponent } from './component/products/products.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { ProductDeltailComponent } from './component/product-deltail/product-deltail.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UpdateComponent } from './component/update/update.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductComponent,
    ProductsComponent,
    AddProductComponent,
    ProductDeltailComponent,
    UpdateComponent,
    EditProductComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
