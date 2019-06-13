import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  uri = environment.local.uri + '/cms';
  carInfo = '/carinfo';
  showRoom = '/showroom';
  promotion = '/promotion';
  carMake = '/carmake';

  constructor(private http: HttpClient, private commonService: CommonService) {}
  //cars
  addNewCar(car) {
    let obj = Object.assign(car, { by: 'test' });

    return this.http.post(`${this.uri}${this.carInfo}/add`, obj);
  }
  updateCar(car) {
    let obj = Object.assign(car, { by: 'test' });
    return this.http.post(`${this.uri}${this.carInfo}/update`, obj);
  }
  removeCar(car) {
    let obj = Object.assign(car, { by: 'test' });
    return this.http.post(`${this.uri}${this.carInfo}/remove`, obj);
  }
  findAll() {
    return this.http.get(`${this.uri}${this.carInfo}/findAll`, {});
  }
  searchCars(data) {
    return this.http.post(`${this.uri}${this.carInfo}/search`, data);
  }
  getMakes() {
    return this.http.get(`${this.uri}${this.carMake}/findAll`, {});
  }

  //show room
  addShowRoom(room) {
    return this.http.post(`${this.uri}${this.showRoom}/add`, room);
  }
  updateShowRoom(room) {
    return this.http.post(`${this.uri}${this.showRoom}/update`, room);
  }
  removeShowRoom(room) {
    return this.http.post(`${this.uri}${this.showRoom}/remove`, room);
  }
  findAllShowRooms() {
    return this.http.get(`${this.uri}${this.showRoom}/findAll`, {});
  }

  //promotions
  addAds(obj) {
    return this.http.post(`${this.uri}${this.promotion}/add`, obj);
  }
  updateAds(obj) {
    return this.http.post(`${this.uri}${this.promotion}/update`, obj);
  }
  removeAds(obj) {
    return this.http.post(`${this.uri}${this.promotion}/remove`, obj);
  }
  findAllAds() {
    return this.http.get(`${this.uri}${this.promotion}/findAll`, {});
  }
}
