import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoryComponent } from './category/category.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { OfferComponent } from './offer/offer.component';
import { AdminComponent } from './admin/admin.component';
import { EditCouponComponent } from './admin/edit-coupon/edit-coupon.component';
import { CouponComponent } from './coupon/coupon.component';
import { AddCouponComponent } from './admin/add-coupon/add-coupon.component';
import { AddOfferComponent } from './admin/add-offer/add-offer.component';
import { EditOfferComponent } from './admin/edit-offer/edit-offer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


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
    PageNotFoundComponent,
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
