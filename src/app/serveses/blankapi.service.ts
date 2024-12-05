import { jwtDecode } from 'jwt-decode';
import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule  } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlankapiService {

  constructor(private _blank:HttpClient) { }


  mainProducts(pram:string=""):Observable <any> {
   return this._blank.get(`https://ecommerce.routemisr.com/api/v1/products`+pram)
  }
  mainProductsP2():Observable <any> {
    return this._blank.get(`https://ecommerce.routemisr.com/api/v1/products?page=2`)
   }

  mainCate():Observable <any> {
    return this._blank.get(`https://ecommerce.routemisr.com/api/v1/categories`)
   }

   getditails(id:any):Observable<any>{
    return this._blank.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
   }

   getBrands():Observable<any>{
    return this._blank.get(`https://ecommerce.routemisr.com/api/v1/brands`)
   }

   getBrandsInfo(id:number):Observable<any>{
    return this._blank.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
   }
   getCateInfo(id:number):Observable<any>{
    return this._blank.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
   }

   decodeToken(){
    const encode=localStorage.getItem('token')
    if (encode!= null) {
     const decode:any=jwtDecode(encode)
    localStorage.setItem('userid',decode.id)
     
    }
   }

   

}
