import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BlankapiService } from 'src/app/serveses/blankapi.service';
import { CartService } from 'src/app/serveses/cart.service';

@Component({
  selector: 'app-cateinfo',
  templateUrl: './cateinfo.component.html',
  styleUrls: ['./cateinfo.component.css'],
})
export class CateinfoComponent {
  constructor(
    private _cateApi: BlankapiService,
    private _pramID: ActivatedRoute,
    private toastr: ToastrService,
    private _add: CartService
  ) {}
  ngOnInit() {
    this.GETid();
    this.getScate();
    this.getProducts();
  }
  fID: number = 0;
  allData: any = [];
  productsReltive: any[] = [];
  GETid() {
    this._pramID.paramMap.subscribe({
      next: (id: any) => {
        this.fID = id.params.id;
      },
    });
  }
  getScate() {
    this._cateApi.getCateInfo(this.fID).subscribe({
      next: (res) => {
        console.log(res.data);

        this.allData = res.data;
      },
    });
  }
  getProducts() {
    this._cateApi.mainProducts('?category=' + this.fID).subscribe({
      next: (res) => {
        this.productsReltive = res.data;
      },
    });
    this._cateApi.mainProductsP2().subscribe({
      next: (res) => {
        this.productsReltive.push(res.data);
      },
    });
  }
  addProduct(id: string) {
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
