import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OfferComponent } from './offer/offer.component';
import { AdminComponent } from './admin/admin.component';
import { EditCouponComponent } from './admin/edit-coupon/edit-coupon.component';
import { CouponComponent } from './coupon/coupon.component';
import { AddCouponComponent } from './admin/add-coupon/add-coupon.component';
import { AddOfferComponent } from './admin/add-offer/add-offer.component';
import { EditOfferComponent } from './admin/edit-offer/edit-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    CategoryComponent,
    AboutComponent,
    NewsComponent,
    HomeComponent,
    OfferComponent,
    AdminComponent,
    EditCouponComponent,
    CouponComponent,
    AddCouponComponent,
    AddOfferComponent,
    EditOfferComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
