import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthapiService } from 'src/app/serveses/authapi.service';

@Component({
  selector: 'app-resetcode',
  templateUrl: './resetcode.component.html',
  styleUrls: ['./resetcode.component.css']
})
export class ResetcodeComponent {
isload:boolean=false
constructor(private _authapi:AuthapiService,private _toste:ToastrService,private _rout:Router){}


  resetpass:FormGroup=new FormGroup({
    resetCode:new FormControl('')
  })


  codereset(){
    this.isload=true
    console.log(this.resetpass.value);
    
    this._authapi.resetPass(this.resetpass.value).subscribe({
      next:(res)=>{
       
        this._toste.success(res.status)
        this._rout.navigate(['/newpass'])
      },
      error:(err)=>{
        
        
        this._toste.error(err.error.message)
      }
    })
    
  }
}
