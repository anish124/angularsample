import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({ 
    selector:'pm-products',
    templateUrl:'./product-list.component.html' ,
    styleUrls:['./product-list.component.css']
  
  })

export class ProductListComponent implements OnInit{
  imageWidth:number=50;
imageMargin:number=2;
//listFilter:string='cart';
listFilter:string;
pageTitle:string='PRODUCT LIST';
showImage :boolean =false;

/*
private productService;
constructor(private productService:ProductService){
 this.productService=productService;
}
*/
constructor(private _productService:ProductService){
 
}
onNotify(message:string):void{

}

toggleImage(): void {
  this.showImage = !this.showImage;
}

    products: IProduct[] ;

    ngOnInit():void{

      
      console.log('In OnInit'+ this._productService.getProducts());
    this.products=this._productService.getProducts()
    }
    onRatingClicked(message:string): void{

    this.pageTitle='Product List: '+ message;
      }
    }
