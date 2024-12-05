import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private _http:HttpClient) { }
  eToken:any= localStorage.getItem('token') 

  payment(opj:object,id:any):Observable<any>
  {
    return this._http.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://youssefabdullah08.github.io/ma`,{
      shippingAddress:opj
    },
    {
      headers:{token:this.eToken}
    }
    )
  }
  getUserORDERS(userid:any):Observable <any>{
    return this._http.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userid}`)
  }
}
