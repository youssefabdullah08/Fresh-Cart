import { Component } from '@angular/core';
import { PaymentService } from 'src/app/serveses/payment.service';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent {
constructor(private _allOrders :PaymentService){}
ngOnInit(){
  this.getALLorders()
}
allOrders:any=null
getALLorders(){
  this._allOrders.getUserORDERS(localStorage.getItem('userid')).subscribe({
    next:(res)=>{
      
      this.allOrders=res
      console.log(this.allOrders);
     
      
    }
  })
}


}
