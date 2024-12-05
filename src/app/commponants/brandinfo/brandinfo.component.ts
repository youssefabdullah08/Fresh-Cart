import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BlankapiService } from 'src/app/serveses/blankapi.service';
import { CartService } from 'src/app/serveses/cart.service';

@Component({
  selector: 'app-brandinfo',
  templateUrl: './brandinfo.component.html',
  styleUrls: ['./brandinfo.component.css'],
})
export class BrandinfoComponent {
  constructor(
    private _brandinfo: BlankapiService,
    private _active: ActivatedRoute,
    private _add: CartService,
    private toastr: ToastrService
  ) {}
  ngOnInit() {
    this.getId();
    this.getInfoData();
    this.getBrandProducts();
  }
  myid: number = 0;
  allData: any = [];
  productsReltive: any[] = [];
  getId() {
    this._active.paramMap.subscribe({
      next: (id: any) => {
        this.myid = id.params.id;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getInfoData() {
    this._brandinfo.getBrandsInfo(this.myid).subscribe({
      next: (res) => {
        this.allData = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getBrandProducts() {
    this._brandinfo.mainProducts(`?brand=` + this.myid).subscribe({
      next: (res) => {
        this.productsReltive = res.data;
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
}
