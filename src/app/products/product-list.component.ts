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
errorMessage : string;
 

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

 

    products: Object ;

 

    ngOnInit():void{

 

     

      //console.log('In OnInit'+ this._productService.getProducts());

    // this._productService.getProducts().subscribe(response => {
    //   this.products = response;
    //         });

    //------------------------------------second option          
     this._productService.getProducts().subscribe(products => 
       this.products = products,
       error=>this.errorMessage=<any>error
    );

    }

    onRatingClicked(message:string): void{

 

    this.pageTitle='Product List: '+ message;

      }


      private handleError(error:Response){
        console.error(error)
      }

    }