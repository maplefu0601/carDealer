import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.scss'],
})
export class PurchasesComponent implements OnInit {
  appUser = 'ims';
  purchaseInfo = { name: '', brand: '', model: '', year: 1900, price: 0, description: '', supplierId: '' };
  purchases = [];

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.setAppUser(this.appUser);
    this.findAll();
  }

  selectPurchase(item, index) {
    // console.log(item, index);
    this.purchaseInfo = item;
  }
  findAll() {
    this.purchases.push({
      name: 'BMW X7',
      brand: 'BMW',
      model: 'X7',
      year: 2019,
      price: 22345,
      purchasedBy: 'Kevin Logs',
      purchasedOn: '2018-09-12',
      auditedBy: 'Kevin Logs',
      auditedOn: '2018-09-13',

      description:
        'Black Sapphire Metallic Exterior Paint, Black Dakota Leather Interior,Comfort Access, Soft Close Doors, Manual Side Sunshades, Lumbar Support, Storage Compartment Package, Heated Rear Seats, Automatic 4-Zone Climate Control, Head-Up Display, SiriusXM Satellite Radio Tuner, BMW ConnectedDrive Services Package, Adaptive LED Headlights, High-Beam Assistant One Owner, Accident Free, andLow Mileage. ',
    });
    this.purchases.push({
      name: 'BMW X6',
      brand: 'BMW',
      model: 'X6',
      year: 2016,
      price: 12345,
      purchasedBy: 'George Hans',
      purchasedOn: '2018-09-22',
      auditedBy: 'Kevin Logs',
      auditedOn: '2018-09-21',
      description:
        'The 2016 X6 is The Perfect Midsize Luxury Crossover SUV known for its Sports Exterior Design! On the spot appraisal! Bring in your vehicle, our BMW Newmarket team wants your trade! Experience a worry-free ownership by benefiting from our BMW Pre-Owned Vehicle Program Includes the following: - 150 Point Inspection by a certified BMW factory-trained technicians - Free CarFax® Vehicle History - 24/7 access to Newmarket BMW website *Conditions apply, please inquire *** For all appointments and test drives',
    });
  }
  save() {
    console.log(this.purchaseInfo);
  }
}
