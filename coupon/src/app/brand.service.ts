import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiBaseUrl= 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getAllBrands(){
    return this.http.get(this.apiBaseUrl + '/getBrand');
  }

  getAllCoupons(){
    return this.http.get(this.apiBaseUrl + '/getCoupon');
  }
  getAllOffers(){
    return this.http.get(this.apiBaseUrl + '/getOffer');
  }

  getAllStores(){
    return this.http.get(this.apiBaseUrl + '/getStore');
  }
  getAllDeals(){
    return this.http.get(this.apiBaseUrl+'/getDeal');
  }
  getCollection(){
    return this.http.get(this.apiBaseUrl+'/getCol');
  }
  getOfferById(id:any){
    return this.http.get(this.apiBaseUrl+'/getOfferById/'+id);
  }
  getCouponById(id:any){
    return this.http.get(this.apiBaseUrl+'/couponById/'+id);
  }

  addCoupon(body:any){
    return this.http.post(this.apiBaseUrl+'/addCoupon', body);
  }
  updateCoupon(id:any, body:any){
    return this.http.put(this.apiBaseUrl + '/updateCoupon/'+ id, body);
  }
  deleteCoupon(id:any){
    return this.http.delete(this.apiBaseUrl+'/deleteCoupon/'+id);
  }
  addOffer(body:any){
    return this.http.post(this.apiBaseUrl+'/addOffer', body);
  }
  updateOffer(id:any, body:any){
    return this.http.put(this.apiBaseUrl + '/updateOffer/'+ id, body);
  }
  deleteOffer(id:any){
    return this.http.delete(this.apiBaseUrl+'/deleteOffer/'+id);
  }
  getUpcoming(){
    return this.http.get(this.apiBaseUrl + '/getupoffer');
  }
}
