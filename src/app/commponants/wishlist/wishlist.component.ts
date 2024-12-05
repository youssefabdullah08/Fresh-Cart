import { Component } from '@angular/core';
import { CartService } from 'src/app/serveses/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent  {
constructor(private _wishlist:CartService){}
allWishlist:any=[]
ngOnInit(){
  this.getAllWishlist()
}


getAllWishlist(){
  this._wishlist.getWishlist().subscribe({
    next:(res)=>{
      console.log(res);
      this.allWishlist=res.data
    }
  })
}
}
