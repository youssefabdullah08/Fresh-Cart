import { Component } from '@angular/core';
import { BlankapiService } from 'src/app/serveses/blankapi.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent {
  constructor(private _Brands: BlankapiService) {}

  ngOnInit() {
    this.AllBrands();
  }

  allBrands: any[] = [];
  AllBrands() {
    this._Brands.getBrands().subscribe({
      next: (res) => {
        this.allBrands = res.data;
      },

      error: (err) => {
        console.log(err);
      },
    });
  }
}
