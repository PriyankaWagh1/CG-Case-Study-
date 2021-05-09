import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from '../brand.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  id:any;
  offers:any;
  coupons:any;
  constructor(
    private loginService : LoginService,
    public brandService: BrandService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.id = data.id;
    })
    this.brandService.getCouponById(this.id).subscribe(data=>{
      this.coupons=data;
    });
    this.brandService.getOfferById(this.id).subscribe(data=>{
      this.offers=data;
    })
    
  }
  
}
