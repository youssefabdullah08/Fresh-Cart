import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private _cartApi: HttpClient) {}
  public cartCountSubject = new BehaviorSubject<number>(0);

  eToken: any = localStorage.getItem('token');

  addProduct(ID: any): Observable<any> {
    return this._cartApi.post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      {
        productId: ID,
      },
      {
        headers: {
          token: this.eToken,
        },
      }
    );
  }

  getCartOrud(): Observable<any> {
    return this._cartApi.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: {
        token: this.eToken,
      },
    });
  }

  REMOVECartPrud(id: any): Observable<any> {
    return this._cartApi.delete(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      {
        headers: {
          token: this.eToken,
        },
      }
    );
  }
  changeCount(id: string, count: number): Observable<any> {
    return this._cartApi.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
      { count },
      {
        headers: {
          token: this.eToken,
        },
      }
    );
  }

  REMOVECart(): Observable<any> {
    return this._cartApi.delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
      headers: {
        token: this.eToken,
      },
    });
  }

  addToWishlist(id: any): Observable<any> {
    return this._cartApi.post(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      {
        productId: id,
      },
      {
        headers: { token: this.eToken },
      }
    );
  }
  getWishlist(): Observable<any> {
    return this._cartApi.get(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,

      {
        headers: { token: this.eToken },
      }
    );
  }
}
