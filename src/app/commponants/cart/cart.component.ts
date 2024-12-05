import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { CartService } from 'src/app/serveses/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private _add: CartService, private _toastr: ToastrService) {}
  cartDetails: any = null;

  ngOnInit() {
    this.getAddedProds();
  }
  getAddedProds() {
    this._add.getCartOrud().subscribe({
      next: (res) => {
        this.cartDetails = res.data;
        this._add.cartCountSubject.next(res.data.length);
      },
      error: (err) => {
        // console.log(err);
      },
    });
  }

  removeItem(iD: any) {
    this._add.REMOVECartPrud(iD).subscribe({
      next: (res) => {
        this.cartDetails = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  changeCount(id: string, count: number) {
    if (count >= 1) {
      this._add.changeCount(id, count).subscribe({
        next: (res) => {
          this.cartDetails = res.data;
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      this._toastr.info('its only one item so you can remove it');
    }
  }

  clearCart() {
    this._add.REMOVECart().subscribe({
      next: (res) => {
        if (res.message == 'success') {
          this.cartDetails = null;
          this._toastr.success(res.message);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
