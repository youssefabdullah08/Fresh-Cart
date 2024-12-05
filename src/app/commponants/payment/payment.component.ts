import { PaymentService } from './../../serveses/payment.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
constructor(private _pay:PaymentService,private _root:ActivatedRoute){}

ngOnInit(){
  this.getId()
}
cartId:any=0
  detailsShipping:FormGroup=new FormGroup({

    details:new FormControl('') ,
    phone:new FormControl (''),
    city:new FormControl('')

  })
getId(){
  this._root.paramMap.subscribe({
    next:(pram:any)=>{
    this.cartId=pram.params.id
     
    }
  })
}


  handejForm(){
    this._pay.payment(this.detailsShipping.value,this.cartId).subscribe({
      next:(res)=>{
        if (res.status=="success") {
          window.open(res.session.url,'_self')
        }


      }
    })
    
  }



}
