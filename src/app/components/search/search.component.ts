import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() carsOutput = new EventEmitter<[]>();
  carMakes = [];
  years = [];
  dataSearch = { brand: '', models: '', year: null, price: 1000 };

  constructor(private commonService: CommonService, private carService: CarService) {
    this.carMakes = [];
    this.years = [];
  }

  ngOnInit() {
    this.commonService.setAppUser('web');
    // this.carMakes.push({ brand: 'Acura', models: ['CL', 'CSX', 'EL', 'IXL'] });
    // this.carMakes.push({ brand: 'Audi', models: ['A3', 'A4', 'A5', 'A6', 'A7'] });
    // this.carMakes.push({ brand: 'BMW', models: ['X1', 'X2', 'X3', 'X4', 'X5', 'X7'] });
    // this.carMakes.push({ brand: 'Buick', models: ['Allure', 'Cascada', 'Century'] });
    // this.carMakes.push({ brand: 'Cadillac', models: ['ATS', 'CTS', 'CT6'] });

    this.findAllMakes();

    for (let i = 2000; i < 2021; ++i) {
      this.years.push(i);
    }
  }

  findAllMakes() {
    this.carService.getMakes().subscribe((res) => {
      console.log('returned makes: ', res);
      this.carMakes = <[]>res;
    }),
      (err) => {
        console.log('return error:', err);
      };
  }
  onSearch() {
    console.log(this.dataSearch);
    let data = {};
    for (let prop in this.dataSearch) {
      if (this.dataSearch[prop]) {
        if (prop === 'brand') {
          data['brand'] = this.dataSearch[prop]['brand'];
        } else if (prop === 'price') {
          data[prop] = { $lte: this.dataSearch.price };
        } else {
          data[prop] = this.dataSearch[prop];
        }
      }
    }
    console.log('start to search cars:', data);
    this.carService.searchCars(data).subscribe((res) => {
      console.log('returned search cars: ', res);
      let cars = <[]>res;
      this.carsOutput.emit(<[]>cars);
    }),
      (err) => {
        console.log('return error:', err);
      };
  }
}
