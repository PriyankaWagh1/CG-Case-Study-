import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BrandService } from '../brand.service';
import { PaymentService } from '../payment.service';


@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  id:any;
  coupons:any;
  constructor(
    private brandService: BrandService,
    private  paymentService: PaymentService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.id = data.id;
    })
    //display coupon by id
    this.brandService.getCouponById(this.id).subscribe(data=>{
      this.coupons=data;
    })
    
  }
  //dummy payment gateway
  options = {
    "key": "rzp_test_mqpELmqmeEONgE",
    "amount": "50000",
    "currency": "INR",
    "name": "GrabDeals",
    "description": "Test Transaction",
    "image": "https://cdn.razorpay.com/logos/F9Yhfb7ZXjXmIQ_medium.png",
    "handler": function (response:any) { 
        alert(response.razorpay_payment_id);
       
    },
    "prefill": {
        "name": "",
        "email": "",
        "contact": ""
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#662829"}
};

pay(){
  let num= Math.floor(Math.random()* 50000)+20000;
  this.options.amount=num.toString();
   let rzp1 = new this.paymentService.nativeWindow.Razorpay(this.options);
   rzp1.open();
  }

}

