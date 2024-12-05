import { AuthapiService } from './../../serveses/authapi.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
constructor(private _login:AuthapiService,private _Router:Router){}



login:FormGroup=new FormGroup({
  email:new FormControl('',[Validators.email , Validators.required]),
  password:new FormControl('',[Validators.pattern(/^\w{6,}$/), Validators.required])
})
errormsg:string=""
getinit():void{
  
  
  if (this.login.valid) {
    this._login.login(this.login.value).subscribe({
      next:(respons)=>{

       
        
        if (respons.message=="success") {
          this._Router.navigate(['/home'])
           localStorage.setItem('token',respons.token)
        }
      },
      error:(err)=>{
        this.errormsg=err
        
      }
      
    })
  }
}

}
