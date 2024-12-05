import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{Router} from '@angular/router'
import { jwtDecode } from 'jwt-decode';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthapiService {

  constructor(private _authapi:HttpClient) { 

  }

signup(opj:object):Observable<any>{
  return this._authapi.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,opj)
}
login(data:any):Observable <any>{
   return this._authapi.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,data)
}


forgetPass(mail:any):Observable <any>{
  return this._authapi.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`, mail)
}
resetPass(code:any):Observable <any>{
  return this._authapi.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode
  `, code)}

  newpass(data:any):Observable <any>{
    return this._authapi.put(`https://ecommerce.routemisr.com/api/v1/auth/resetPassword`, data)}
  
  
  }










