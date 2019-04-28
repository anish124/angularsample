import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import { HttpModule } from "@angular/http";
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent } from './products/product-detail-component';
import { ProductFilterPipe } from './products/product-filter-pipe';
import { StarComponent } from './shared/star.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ProductDetailGaurd } from "./products/product-guard-service";
@NgModule({
 
  imports: [
 
    BrowserModule,FormsModule,HttpModule ,HttpClientModule,RouterModule.forRoot([


      {path:'products',component:ProductListComponent},
      {path:'product/:id',
      
      canActivate:[ProductDetailGaurd] ,component:ProductDetailComponent},
      {path:'welcome',component:WelcomeComponent}
      
 

    ])
 
 
  ], declarations: [
    AppComponent,WelcomeComponent,ProductListComponent,ProductDetailComponent,ProductFilterPipe,StarComponent

  ],providers:[ProductDetailGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
