import { Component, OnInit } from '@angular/core';
import { BrandService } from '../brand.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsDetails: any;
  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.brandService.getUpcoming().subscribe(data=>{
      this.newsDetails = data;
    })
  }

}
