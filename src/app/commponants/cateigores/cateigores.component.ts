import { Component } from '@angular/core';
import { BlankapiService } from 'src/app/serveses/blankapi.service';

@Component({
  selector: 'app-cateigores',
  templateUrl: './cateigores.component.html',
  styleUrls: ['./cateigores.component.css'],
})
export class CateigoresComponent {
  constructor(private _cate: BlankapiService) {}

  ngOnInit() {
    this.dAllCate();
  }
  allCate: any = [];
  dAllCate() {
    this._cate.mainCate().subscribe({
      next: (res) => {
        this.allCate = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
