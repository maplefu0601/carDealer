import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonService } from '../../services/common.service';
import { CarListComponent } from '../car-list/car-list.component';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car-information',
  templateUrl: './car-information.component.html',
  styleUrls: ['./car-information.component.scss'],
})
export class CarInformationComponent implements OnInit {
  searchShow = false;
  appUser = 'web';
  cars = [];

  constructor(private commonService: CommonService, private carService: CarService) {
    this.searchShow = false;
  }

  ngOnInit() {
    this.commonService.setAppUser(this.appUser);
    this.findAllCars();
  }

  showSearch() {
    this.searchShow = !this.searchShow;
  }

  findAllCars() {
    this.carService.findAll().subscribe((res) => {
      console.log('returned: ', res);
      this.cars = <[]>res;
    }),
      (err) => {
        console.log('return error:', err);
      };
  }

  getCarsFromSearch($event) {
    console.log('cars from search:', $event);
    this.cars = $event;
  }
}
