import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CommonService } from '../../../services/common.service';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-promotion-ads',
  templateUrl: './promotion-ads.component.html',
  styleUrls: ['./promotion-ads.component.scss'],
})
export class PromotionAdsComponent implements OnInit {
  appUser = 'cms';
  form: FormGroup;
  promotions = [];
  edit = true;
  selected = { index: -1, ads: { discount: '', description: '' } };

  constructor(private formBuilder: FormBuilder, private carService: CarService, private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.setAppUser(this.appUser);

    this.form = this.formBuilder.group({
      discount: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.findAll();
  }

  findAll() {
    this.promotions.push({ discount: '8%', description: 'User get 8% off when they buy a new BMW' });
    this.promotions.push({ discount: '18%', description: 'User get 18% off when they buy a new Audi' });

    this.carService.findAllAds().subscribe((res) => {
      console.log('returned: ', res);
      this.promotions = <[]>res;
    }),
      (err) => {
        console.log('return error:', err);
      };
  }
  addNewAds() {
    this.edit = false;
    this.selected = { index: 0, ads: { discount: '', description: '' } };
  }
  copyAds() {
    this.edit = false;
  }
  save() {
    this.selected.ads = Object.assign(this.selected.ads, this.form.value);
    console.log(this.selected);
    let ret;
    if (this.edit) {
      ret = this.carService.updateAds(this.selected.ads);
    } else {
      ret = this.carService.addAds(this.selected.ads);
    }

    ret.subscribe((res) => {
      console.log('returned: ', res);
      this.findAll();
    }),
      (err) => {
        console.log('return error:', err);
      };
  }
  removeAds() {
    this.carService.removeAds(this.selected.ads).subscribe((res) => {
      console.log('returned: ', res);
      this.findAll();
    }),
      (err) => {
        console.log('return error:', err);
      };
  }
}
