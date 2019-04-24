import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService{
private _url:string="http://localhost:3030/products";

constructor(private _http:Http){}

getProducts():Observable<Response>{

  return  this._http.get(this._url).map((response:Response))=><IProduct[]>response.json();

}
}