import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  appUser = 'ims';
  customerInfo = {
    name: '',
    personalInfo: {
      gental: '',
      DOB: Date.now(),
      country: '',
      provience: '',
      city: '',
      address: '',
      phone: '',
      email: '',
    },
    paymentInfo: { name: '', address: '', cardType: '', cardNo: '', expireDate: '', secureCode: '' },
    shippingInfo: { name: '', address: '', city: '', provience: '', country: '' },
    createdBy: '',
    createdOn: '',
  };
  customers = [];
  personalInfo = {
    gental: 'male',
    DOB: '1990-02-14',
    country: 'Canada',
    provience: 'Ontario',
    city: 'Toronto',
    address: '365 Bay street',
    phone: '416-220-2200',
    email: 'baystreet@toronto.ca',
  };
  paymentInfo = {
    name: '',
    address: '',
    cardType: 'master',
    cardNo: '550027331234',
    expireDate: '2020-09-01',
    secureCode: '900',
  };
  shippingInfo = {
    name: 'Kevin Los',
    address: '365 Bay street',
    city: 'Toronto',
    provience: 'Ontrio',
    country: 'Canada',
  };

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.setAppUser(this.appUser);
    this.findAll();
    console.log(this.customers);
  }

  selectItem(item, index) {
    // console.log(item, index);
    this.customerInfo = item;
  }
  findAll() {
    this.customers.push({
      name: 'Daniela Fus',
      createdBy: 'admin',
      createdOn: '2019-01-23',
      personalInfo: this.personalInfo,
      paymentInfo: this.paymentInfo,
      shippingInfo: this.shippingInfo,
    });
    this.customers.push({
      name: 'Modanland Lee',
      createdBy: 'admin',
      createdOn: '2019-02-23',
      personalInfo: this.personalInfo,
      paymentInfo: this.paymentInfo,
      shippingInfo: this.shippingInfo,
    });
  }
  save() {
    console.log(this.customerInfo);
  }
}
