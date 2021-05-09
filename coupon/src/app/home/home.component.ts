import { Component, OnInit } from '@angular/core';
import { BrandService } from '../brand.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  brandDetails : any;
  stores : any;
  deals:any;
  collection:any;
  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.brandService.getAllBrands().subscribe((data: any)=>{
      this.brandDetails = data;
    });
    this.brandService.getAllStores().subscribe((data:any)=>{
      this.stores=data;
    });
    this.brandService.getAllDeals().subscribe((data:any)=>{
      this.deals=data;
    });
    this.brandService.getCollection().subscribe((data)=>{
      this.collection =data;
    })
  }

}
