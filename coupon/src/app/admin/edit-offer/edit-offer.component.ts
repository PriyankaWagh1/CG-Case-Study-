import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'src/app/brand.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.component.html',
  styleUrls: ['./edit-offer.component.css']
})
export class EditOfferComponent implements OnInit {

  newOfferForm= new FormGroup({});
  id:any;
  offers:any;
  constructor(private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.newOfferForm = new FormGroup({
      id: new FormControl('', Validators.required),
      tag: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      stores: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required)
    });
  //to fetch values of offer by id
  this.activatedRoute.params.subscribe(data=>{
    this.id = data.id;
    })
    //for prefilling information in form
    this.brandService.getOfferById(this.id).subscribe(data=>{
      this.offers=data;
      this.newOfferForm.patchValue(this.offers);
    })
  }
  //update and send updated values to database
  updateOffer(form:any){
    this.brandService.updateOffer(this.id,this.newOfferForm.value).subscribe((data:any)=>{
      console.log("Updated");
      this.router.navigate(['/admin/add-offer']);
    })
  }
}
