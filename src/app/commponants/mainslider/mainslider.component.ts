import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BlankapiService } from 'src/app/serveses/blankapi.service';

@Component({
  selector: 'app-mainslider',
  templateUrl: './mainslider.component.html',
  styleUrls: ['./mainslider.component.css']
})
export class MainsliderComponent {
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
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 6
      }
    },
    nav: true,
    autoplay:true,
    autoplaySpeed:2000
  }



  constructor(private _cate:BlankapiService){}

ngOnInit():void{
  this.getCate()
  
  
}
allCate:any[]=[]
getCate(){
  this._cate.mainCate().subscribe({
    next:(res)=>{
      
      
this.allCate=res.data
    },
    error:(err)=>{
      console.log(err);
      
    }
    })
}


}
