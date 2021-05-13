import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'src/app/brand.service';


@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {

  id:any;
  coupons:any;
  newCouponForm : any;
  constructor(private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.newCouponForm = new FormGroup({
      couponCode: new FormControl('', [Validators.required, Validators.minLength(3)]),
      couponTag: new FormControl('', Validators.required),
      couponDes: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      stores: new FormControl('', Validators.required),
      
    });
    this.brandService.getAllCoupons().subscribe(data=>{
      this.coupons= data;
    });
    
  }
  //add new coupon  
  submitCoupon(form:any){
    this.brandService.addCoupon(form.value).subscribe(data=>{
      console.log("Successfully Added");
      this.ngOnInit();
    },
    (err)=>{
      console.log(err);
    })
  }
  //deletion of coupon
  delete(coupon:any){
    this.brandService.deleteCoupon(coupon._id).subscribe(data=>{
      console.log('Deleted!');
      this.ngOnInit();
    },err=>{
      console.log(err);
    });
  }
  
}
