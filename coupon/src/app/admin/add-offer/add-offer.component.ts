import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BrandService } from 'src/app/brand.service';

@Component({
  selector: 'app-add-offer',
  templateUrl: './add-offer.component.html',
  styleUrls: ['./add-offer.component.css']
})
export class AddOfferComponent implements OnInit {

  id:any;
  offers:any;
  newOfferForm : any;
  constructor(private brandService: BrandService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

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
    this.brandService.getAllOffers().subscribe(data=>{
      this.offers=data;
      console.log(this.offers);
    })
    
  }
  submitOffer(form:any){
    this.brandService.addOffer(form.value).subscribe(data=>{
      console.log("Successfully Added");
      this.router.navigate(['/admin/add-offer']);
    },
    (err)=>{
      console.log(err);
    })
  }
  delete(id: any){
    this.brandService.deleteOffer(id).subscribe(data=>{
      console.log('Deleted!');
      this.router.navigate(['/admin/add-offer']);
    },err=>{
      console.log(err);
    });
  }
}
