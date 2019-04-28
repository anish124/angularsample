import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  throwError } from 'rxjs'; 
import { Observable } from 'rxjs/Observable';
import { catchError, tap, map } from 'rxjs/operators';
import 'rxjs/add/operator/do'; 
import 'rxjs/add/operator/catch'; 
import {  HttpHeaders, HttpParams } from '@angular/common/http';
const httpOptions = {

  headers: new HttpHeaders(
    { 'Access-Control-Allow-Origin':'*',
    'Content-Type': 'application/json'})

};
@Injectable()
export class ProductService{
private _url:string="http://localhost:3030/products";
 
constructor(private http: HttpClient) { }

 

 

getProducts(){

 

  return  this.http.get(this._url,httpOptions)._catch(this.handleError);

  
  }

      //  getProducts():Observable<IProduct[]>{
      //   return  this.http.get(this._url,httpOptions)
      //  .pipe(map((response:Response)=><IProduct[]>response.json()))
      //  .do(data=>console.log(JSON.stringify(data)))
      //  ._catch(this.handleError);
      //  }
  
   
  
   
  
  private handleError(err: HttpErrorResponse) {
  
    // in a real world app, we may send the server to some remote logging infrastructure
  
    // instead of just logging it to the console
  
    let errorMessage = '';
  
    if (err.error instanceof ErrorEvent) {
  
      // A client-side or network error occurred. Handle it accordingly.
  
      errorMessage = `An error occurred: ${err.error.message}`;
  
    } else {
  
      // The backend returned an unsuccessful response code.
  
      // The response body may contain clues as to what went wrong,
  
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  
    }
  
    console.error(errorMessage);
  
    return throwError(errorMessage);
  
  }
  
  }