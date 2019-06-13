import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { CarListComponent } from '../car-list/car-list.component';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
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
      if (this.cars.length > 100) {
        this.cars.length = 100;
      }
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
