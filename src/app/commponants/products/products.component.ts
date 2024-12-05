import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthapiService } from 'src/app/serveses/authapi.service';
import { BlankapiService } from 'src/app/serveses/blankapi.service';
import { CartService } from 'src/app/serveses/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  constructor(
    private _proapi: BlankapiService,
    private _add: CartService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getallprodacts();
  }

  allData: any[] = [];
  getallprodacts(): void {
    this._proapi.mainProducts().subscribe({
      next: (res) => {
        this.allData = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getP2() {
    this._proapi.mainProductsP2().subscribe({
      next: (res) => {
        this.allData = res.data;
      },
    });
  }

  addProduct(id: string) {
    this.toastr.info('the product will be in your cart');
    this._add.addProduct(id).subscribe({
      next: (res) => {
        this.toastr.success(res.message);
        console.log(res);
      },
      error: (err) => {
        console.log(err);
        this.toastr.error(err.message);
      },
    });
  }
  addWishlist(id: any) {
    this._add.addToWishlist(id).subscribe({
      next: (res) => {
        this.toastr.success(res.message);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
