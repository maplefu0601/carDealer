import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CommonService } from '../../../services/common.service';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-car-management',
  templateUrl: './car-management.component.html',
  styleUrls: ['./car-management.component.scss'],
})
export class CarManagementComponent implements OnInit {
  appUser = 'cms';
  form: FormGroup;
  cars = [];
  edit = false;
  selectedCar = { index: 0, car: {} };

  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService,
    private commonService: CommonService,
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      brand: ['', Validators.required],
      model: ['', Validators.required],
      year: ['', Validators.required],
      price: ['', Validators.required],
      description: [],
    });
    this.findAll();
    // const car1 =
    //   'data:image/png;base64,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';
    // const car2 =
    //   'data:image/png;base64,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';
    // this.commonService.setAppUser(this.appUser);
    // this.cars.push({
    //   brand: 'Audi',
    //   model: 'X3',
    //   price: 2234.0,
    //   description:
    //     'FREIGHT, Excise Tax, Luxury, V6 3.6L 335 HP (lgx) - Gas (W/1SP), 8 Speed Automatic (m5n) - Automatic, Wheel Locks (LPO), Rear Spoiler (LPO), 18 X 8.5 10-Spoke Polished Alloy Wheels, Cabin Filter (LPO), All-Weather Mat Protection Package (LPO), Leather Seating Surfaces - Jet Black, Crystal White Tricoat ',
    //   images: [car1],
    // });
    // this.cars.push({
    //   brand: 'BMW',
    //   model: 'X9',
    //   price: 12234.0,
    //   description:
    //     'FREIGHT, Excise Tax, Luxury, V6 3.6L 335 HP (lgx) - Gas (W/1SP), 8 Speed Automatic (m5n) - Automatic, Wheel Locks (LPO), Rear Spoiler (LPO), 18 X 8.5 10-Spoke Polished Alloy Wheels, Cabin Filter (LPO), All-Weather Mat Protection Package (LPO), Leather Seating Surfaces - Jet Black, Crystal White Tricoat ',
    //   images: [car2, car1],
    // });
    // this.cars.push({
    //   brand: 'Mazda',
    //   model: 'X9',
    //   price: 12234.0,
    //   description:
    //     'FREIGHT, Excise Tax, Luxury, V6 3.6L 335 HP (lgx) - Gas (W/1SP), 8 Speed Automatic (m5n) - Automatic, Wheel Locks (LPO), Rear Spoiler (LPO), 18 X 8.5 10-Spoke Polished Alloy Wheels, Cabin Filter (LPO), All-Weather Mat Protection Package (LPO), Leather Seating Surfaces - Jet Black, Crystal White Tricoat ',
    //   images: [car2, car1],
    // });
  }

  selectCar(car, index) {
    this.edit = true;
    this.selectedCar = { index, car };
    console.log(car, index);
  }

  onFileChanged(event) {
    this.commonService.loadImageFile(event, (data) => {
      if (!this.selectedCar.car.hasOwnProperty('images')) {
        this.selectedCar.car['images'] = [];
      }
      this.selectedCar.car['images'].push(data.filePreview);
    });
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  findAll() {
    this.carService.findAll().subscribe((res) => {
      console.log('returned: ', res);
      this.cars = <[]>res;
    }),
      (err) => {
        console.log('return error:', err);
      };
  }
  addNewCar() {
    this.edit = false;
    this.selectedCar = { index: 0, car: {} };
  }
  copyCar() {
    this.edit = false;
  }
  save() {
    this.selectedCar.car = Object.assign(this.selectedCar.car, this.form.value);
    console.log(this.selectedCar);
    let ret;
    if (this.edit) {
      ret = this.carService.updateCar(this.selectedCar.car);
    } else {
      ret = this.carService.addNewCar(this.selectedCar.car);
    }

    ret.subscribe((res) => {
      console.log('returned: ', res);
      this.findAll();
    }),
      (err) => {
        console.log('return error:', err);
      };
  }
  removeCar() {
    this.carService.removeCar(this.selectedCar.car).subscribe((res) => {
      console.log('returned: ', res);
      this.findAll();
    }),
      (err) => {
        console.log('return error:', err);
      };
  }
}
