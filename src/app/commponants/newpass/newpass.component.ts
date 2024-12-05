import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthapiService } from 'src/app/serveses/authapi.service';

@Component({
  selector: 'app-newpass',
  templateUrl: './newpass.component.html',
  styleUrls: ['./newpass.component.css']
})
export class NewpassComponent {
constructor(private _authapi:AuthapiService,private _rout:Router ,private _toste :ToastrService){}

newpassword:FormGroup=new FormGroup({
  email:new FormControl('',Validators.email),
  newPassword:new FormControl('',Validators.pattern(/^\w{6,}$/))
})



changePass(){
  console.log(this.newpassword.value);
  
  this._authapi.newpass(this.newpassword.value).subscribe({
    next:(res)=>{
      localStorage.setItem('token',res.token)
      this._rout.navigate(['/home'])
      this._toste.success("password changed sucssfully")
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}
}
