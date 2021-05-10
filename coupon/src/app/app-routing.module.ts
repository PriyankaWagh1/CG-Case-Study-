import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { OfferComponent } from './offer/offer.component';
import { AdminComponent } from './admin/admin.component';
import { EditCouponComponent } from './admin/edit-coupon/edit-coupon.component';
import { CouponComponent } from './coupon/coupon.component';
import { AddCouponComponent } from './admin/add-coupon/add-coupon.component';
import { EditOfferComponent } from './admin/edit-offer/edit-offer.component';
import { AddOfferComponent } from './admin/add-offer/add-offer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'about', component : AboutComponent},
  {path: 'news', component: NewsComponent},
  {path:'categories', component: CategoryComponent},
  {path:'offer/:id', component: OfferComponent,canActivate:[AuthGuardService]},
  {path:'coupon/:id', component: CouponComponent,canActivate:[AuthGuardService]},
  {path:'admin',component:AdminComponent,
    children:[
      {path:'edit-coupon/:id', component: EditCouponComponent},
      {path:'add-coupon', component:AddCouponComponent},
      {path:'edit-offer/:id',component:EditOfferComponent},
      {path:'add-offer',component:AddOfferComponent}
    ],canActivate:[AuthGuardService]},
    {path:'offer', redirectTo:'login', pathMatch:"full"},
    {path:'coupon', redirectTo:'login', pathMatch:"full"},
    {path:'admin', redirectTo:'login', pathMatch:"full"},
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
