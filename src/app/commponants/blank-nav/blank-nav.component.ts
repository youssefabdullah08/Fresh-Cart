import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/serveses/cart.service';
import { ThemeService } from 'src/app/serveses/theme.service';

@Component({
  selector: 'app-blank-nav',
  templateUrl: './blank-nav.component.html',
  styleUrls: ['./blank-nav.component.css']
})
export class BlankNavComponent {
  isDarkTheme: boolean = false;
  itemsCount: number = 0;
  wishListCount: number = 0;
  isLogedIn: boolean = localStorage.getItem('token') ? true : false;

  constructor(private _rout: Router, private _toste: ToastrService, private _cart: CartService, private _themeService: ThemeService) { }

  ngOnInit() {
    this._themeService.theme$.subscribe(theme => {
      this.isDarkTheme = theme === 'dark';
    });

    this._cart.cartCountSubject.subscribe(value => {
      this.itemsCount = value;
    });

    this._cart.wishlistCountSubject.subscribe(value => {
      this.wishListCount = value;
    });

    this._cart.getCartOrud().subscribe({
      next: (response) => {
        if (response && response.numOfCartItems) {
          this._cart.cartCountSubject.next(response.numOfCartItems);
        }
      },
      error: (err) => console.log(err)
    });

    this._cart.getWishlist().subscribe({
      next: (response) => {
        if (response && response.count) {
          this._cart.wishlistCountSubject.next(response.count);
        } else if (response && response.data) {
          this._cart.wishlistCountSubject.next(response.data.length);
        }
      },
      error: (err) => console.log(err)
    });
  }

  toggleTheme() {
    this._themeService.toggleTheme();
  }

  signout() {
    this._toste.success('you are signout succesfuly')
    this._rout.navigate(['/login'])
    localStorage.clear()
  }

}
