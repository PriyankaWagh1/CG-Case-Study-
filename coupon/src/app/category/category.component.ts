import { Component, OnInit } from '@angular/core';
import { BrandService } from '../brand.service';
import {reduce} from 'rxjs/operators';
import { LoginService } from '../login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  couponDetails:any;
  offers : any;
  category:any=[];
  count:any={};
  keys:any;
  values: any;
  id: any;
  offerDetails:any;
  public query: any = " ";
  constructor(
    private brandService: BrandService, 
    public loginService: LoginService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    //coupons
    this.brandService.getAllCoupons().subscribe(data=>{
      this.couponDetails = data;
      console.log(data);
      for(let coupon of this.couponDetails){
        this.category.push(coupon["category"]);    
      }
     
      this.category.forEach((el:any) =>{
        this.count[el] = this.count[el] + 1 || 1;

      });
      //store different categories in values
      this.keys = Object.keys(this.count);
      this.values = this.keys.splice(',');
      
    });

    //offers and store categories and display them in browser
    this.brandService.getAllOffers().subscribe(data=>{
      this.offerDetails = data;
      console.log(data);
      for(let offer of this.offerDetails){
        this.category.push(offer["category"]);    
      }
     
      this.category.forEach((el:any) =>{
        this.count[el] = this.count[el] + 1 || 1;

      });
      //store different categories in values
      this.keys = Object.keys(this.count);
      this.values = this.keys.splice(',');
      
    });
    this.brandService.getAllOffers().subscribe(data=>{
      this.offers=data;
    });
    
        
  }
  //to show coupon code
  showCode(id: any){
    if(this.loginService.checkTokenExist()){
        this.router.navigate(['/coupon/'+id]);
     
    }else{
      console.log('Login');
    }
  }
  //to show offer
  showOffer(id: any){
    if(this.loginService.checkTokenExist()){
            this.router.navigate(['/offer/'+id]);     
    }else{
      console.log('Login');
    }
  }
  
}
