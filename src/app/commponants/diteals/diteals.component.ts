import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { BlankapiService } from 'src/app/serveses/blankapi.service';
import { CartService } from 'src/app/serveses/cart.service';

@Component({
  selector: 'app-diteals',
  templateUrl: './diteals.component.html',
  styleUrls: ['./diteals.component.css']
})
export class DitealsComponent {
  constructor(private _activelink:ActivatedRoute , private _getspi:BlankapiService,private _add:CartService,private toastr:ToastrService){}
proid:number=0
allDataSPI:any=[]
imgL:number[]=[]
ngOnInit(){
  this.getId()
  this.getall()
}
  getId(){
    this._activelink.paramMap.subscribe({
      next:(pram:any)=>{
       this.proid=pram.params.id
        
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }

  getall(){
    this._getspi.getditails(this.proid).subscribe({
      next:(res)=>{
      this.allDataSPI=res.data
       this.imgL=this.allDataSPI.images 
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
  }




  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false,
    autoplay:true
  }


  addProduct(id:string){
    this._add.addProduct(id).subscribe({
      next:(res)=>{
        this.toastr.success(res.message);
        console.log(res);
      },
      error:(err)=>{
        console.log(err);
        this.toastr.error(err.message)
      }
    })
    }

}
