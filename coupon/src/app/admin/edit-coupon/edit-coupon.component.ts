import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'src/app/brand.service';

@Component({
  selector: 'app-edit-coupon',
  templateUrl: './edit-coupon.component.html',
  styleUrls: ['./edit-coupon.component.css']
})
export class EditCouponComponent implements OnInit {

  newCouponForm= new FormGroup({});
  id:any;
  coupons:any;
  constructor(private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.newCouponForm = new FormGroup({
      couponCode: new FormControl('', [Validators.required, Validators.minLength(3)]),
      couponTag: new FormControl('', Validators.required),
      couponDes: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      brand: new FormControl(''),
      stores: new FormControl('', Validators.required),
      
    });
     //to fetch values of coupon by id
    this.activatedRoute.params.subscribe(data=>{
    this.id = data.id;
    })
    //for prefilling information in form
    this.brandService.getCouponById(this.id).subscribe(data=>{
      this.coupons=data;
      this.newCouponForm.patchValue(this.coupons);
    })
  }
  //update and send updated values to database
  updateCoupon(form:any){
    this.brandService.updateCoupon(this.id,this.newCouponForm.value).subscribe((data:any)=>{
      console.log("Updated");
      this.router.navigate(['/admin/add-coupon']);
    })
  }
}
