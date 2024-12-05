import { BlankapiService } from 'src/app/serveses/blankapi.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
constructor(private _blankapi:BlankapiService){}
ngOnInit(){
  this._blankapi.decodeToken()
}
}
