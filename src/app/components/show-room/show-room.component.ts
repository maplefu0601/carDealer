import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-show-room',
  templateUrl: './show-room.component.html',
  styleUrls: ['./show-room.component.scss'],
})
export class ShowRoomComponent implements OnInit {
  appUser = 'web';

  selectedRoom = { index: -1, name: '', videoUrl: '' };
  showRooms = [{ name: 'bmw7', videoUrl: 'DtQadSOwNtk' }, { name: 'bmw9', videoUrl: 'fogWXrCZyBQ' }];

  constructor(private commonService: CommonService, private carService: CarService) {}

  ngOnInit() {
    this.commonService.setAppUser(this.appUser);
    this.findAll();
  }

  findAll() {
    this.carService.findAllShowRooms().subscribe((res) => {
      console.log('returned: ', res);
      this.showRooms = <[]>res;
    }),
      (err) => {
        console.log('return error:', err);
      };
  }
}
