import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { CarService } from '../../../services/car.service';

@Component({
  selector: 'app-show-management',
  templateUrl: './show-management.component.html',
  styleUrls: ['./show-management.component.scss'],
})
export class ShowManagementComponent implements OnInit {
  appUser = 'cms';
  selectedRoom = { index: -1, name: '', videoUrl: '' };
  showRooms = [{ name: 'bmw7', videoUrl: 'DtQadSOwNtk' }, { name: 'bmw9', videoUrl: 'fogWXrCZyBQ' }];

  constructor(private commonService: CommonService, private carService: CarService) {}

  ngOnInit() {
    this.commonService.setAppUser(this.appUser);
    this.findAll();
  }

  getRoomId(index) {
    return `room_${index}`;
  }
  onSelectRoom(room, index) {
    this.selectedRoom = room;
    this.selectedRoom.index = index;
  }
  showEdit(index) {
    return index !== this.selectedRoom.index;
  }
  hideEdit(index) {
    this.selectedRoom.index = -1;
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
  onAdd() {
    console.log(this.selectedRoom);
    this.carService.addShowRoom(this.selectedRoom).subscribe((res) => {
      console.log('returned: ', res);
      this.findAll();
    }),
      (err) => {
        console.log('return error:', err);
      };
  }
  onSave() {
    console.log(this.selectedRoom);
    this.carService.addShowRoom(this.selectedRoom).subscribe((res) => {
      console.log('returned: ', res);
      this.findAll();
    }),
      (err) => {
        console.log('return error:', err);
      };
  }
}
