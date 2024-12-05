import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './commponants/home/home.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { SignupComponent } from './commponants/signup/signup.component';
import { LoginComponent } from './commponants/login/login.component';
import { CartComponent } from './commponants/cart/cart.component';
import { AuthNavComponent } from './commponants/auth-nav/auth-nav.component';
import { BlankNavComponent } from './commponants/blank-nav/blank-nav.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { MainbodyComponent } from './commponants/mainbody/mainbody.component';
import { Err404Component } from './commponants/err404/err404.component'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainsliderComponent } from './commponants/mainslider/mainslider.component';  
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadersliderComponent } from './commponants/headerslider/headerslider.component';
import { DitealsComponent } from './commponants/diteals/diteals.component';
import { FooterComponent } from './commponants/footer/footer.component';
import { ProductsComponent } from './commponants/products/products.component';
import { CateigoresComponent } from './commponants/cateigores/cateigores.component';
import { BrandsComponent } from './commponants/brands/brands.component';
import { BrandinfoComponent } from './commponants/brandinfo/brandinfo.component';
import { CateinfoComponent } from './commponants/cateinfo/cateinfo.component';
import { ToastrModule } from 'ngx-toastr';
import { PaymentComponent } from './commponants/payment/payment.component';
import { AllordersComponent } from './commponants/allorders/allorders.component';
import { WishlistComponent } from './commponants/wishlist/wishlist.component';
import { ForgetpassComponent } from './commponants/forgetpass/forgetpass.component';
import { ResetcodeComponent } from './commponants/resetcode/resetcode.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { LoadingInterceptor } from './loading.interceptor';
import { NewpassComponent } from './commponants/newpass/newpass.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthLayoutComponent,
    BlankLayoutComponent,
    SignupComponent,
    LoginComponent,
    CartComponent,
    AuthNavComponent,
    BlankNavComponent,
    MainbodyComponent,
    Err404Component,
    MainsliderComponent,
    HeadersliderComponent,
    DitealsComponent,
    FooterComponent,
    ProductsComponent,
    CateigoresComponent,
    BrandsComponent,
    BrandinfoComponent,
    CateinfoComponent,
    PaymentComponent,
    AllordersComponent,
    WishlistComponent,
    ForgetpassComponent,
    ResetcodeComponent,
    NewpassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    CarouselModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
