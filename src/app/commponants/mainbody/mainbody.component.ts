import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BlankapiService } from 'src/app/serveses/blankapi.service';
import { CartService } from 'src/app/serveses/cart.service';

@Component({
  selector: 'app-mainbody',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.css']
})
export class MainbodyComponent {
  constructor(private _products: BlankapiService, private _cartApi: CartService, private toastr: ToastrService, private _router: Router) { }
  allData: any[] = []
  colerChange = ""

  ngOnInit() {
    this.getProducts()
  }
  getProducts() {
    this._products.mainProducts().subscribe({
      next: (res) => {
        // console.log(res.data);

        this.allData = res.data
      },

      error: (err) => {
        console.log(err);

      }
    })
  }
  addProduct(id: string) {
    if (localStorage.getItem('token')) {
      this.toastr.info('product will be in your cart')
      this._cartApi.addProduct(id).subscribe({

        next: (res) => {
          this.toastr.success(res.message);

        },
        error: (err) => {
          console.log(err);
          this.toastr.error(err.message)
        }
      })
    } else {
      this._router.navigate(['/login']);
    }
  }

  addWishlist(id: any) {
    if (localStorage.getItem('token')) {
      this._cartApi.addToWishlist(id).subscribe({
        next: (res) => {
          this.colerChange = res.status
          console.log(this.colerChange);

          this.toastr.success(res.message)
        },
        error: (err) => {
          console.log(err);

        }
      })
    } else {
      this._router.navigate(['/login']);
    }
  }
}
