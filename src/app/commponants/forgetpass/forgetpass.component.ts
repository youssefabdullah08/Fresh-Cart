import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthapiService } from 'src/app/serveses/authapi.service';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent {
constructor( private _authapi:AuthapiService, private _router:Router,private _toste:ToastrService){}

resetpass:FormGroup=new FormGroup({
  email:new FormControl('',Validators.email)
})


forGet(){
  
  
  this._authapi.forgetPass(this.resetpass.value).subscribe({
    next:(res)=>{
      this._toste.success(res.message)
      this._router.navigate(['/resetcode'])
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
}





}
