import { NewpassComponent } from './commponants/newpass/newpass.component';
import { AllordersComponent } from './commponants/allorders/allorders.component';
import { authGuard } from './gards/auth.guard';
import { HomeComponent } from './commponants/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { SignupComponent } from './commponants/signup/signup.component';
import { LoginComponent } from './commponants/login/login.component';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
import { CartComponent } from './commponants/cart/cart.component';
import { Err404Component } from './commponants/err404/err404.component';
import { DitealsComponent } from './commponants/diteals/diteals.component';
import { CateigoresComponent } from './commponants/cateigores/cateigores.component';
import { BrandsComponent } from './commponants/brands/brands.component';
import { ProductsComponent } from './commponants/products/products.component';
import { BrandinfoComponent } from './commponants/brandinfo/brandinfo.component';
import { CateinfoComponent } from './commponants/cateinfo/cateinfo.component';
import { PaymentComponent } from './commponants/payment/payment.component';
import { WishlistComponent } from './commponants/wishlist/wishlist.component';
import { ForgetpassComponent } from './commponants/forgetpass/forgetpass.component';
import { ResetcodeComponent } from './commponants/resetcode/resetcode.component';

const routes: Routes = [
  {path:"",redirectTo:"signup",pathMatch:"full"},
  {path:"",component:AuthLayoutComponent,children:[
    {path:"signup",component:SignupComponent},
    {path:"login",component:LoginComponent},
    {path:"forget",component:ForgetpassComponent},
    {path:"resetcode",component:ResetcodeComponent},
{path:"newpass",component:NewpassComponent}
  ]},
  {path:"", canActivate:[authGuard],component:BlankLayoutComponent,children:[
  {path:"home",component:HomeComponent},
  {path:"cart",component:CartComponent},
  {path:"ditaels/:id",component:DitealsComponent},
  {path:"cate",component:CateigoresComponent},
{path:"brands",component:BrandsComponent},
{path:"products",component:ProductsComponent},
{path:"brandinfo/:id",component:BrandinfoComponent},
    {path:"cateinfo/:id",component:CateinfoComponent},
    {path:"payment/:id",component:PaymentComponent},
    {path:"allorders",component:AllordersComponent},
    {path:"wishlist",component:WishlistComponent}
  ]},
  {path:'**', component:Err404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:"top"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
