import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { EditCouponComponent } from './edit-coupon.component';
import { BrandService } from 'src/app/brand.service';
import {RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('EditCouponComponent', () => {
  let component: EditCouponComponent;
  let fixture: ComponentFixture<EditCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports :[HttpClientTestingModule, HttpClientModule,RouterTestingModule,ReactiveFormsModule],
      declarations: [ EditCouponComponent ],
      providers : [BrandService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
