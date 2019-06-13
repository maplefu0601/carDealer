import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-ims-home',
  templateUrl: './ims-home.component.html',
  styleUrls: ['./ims-home.component.scss'],
})
export class ImsHomeComponent implements OnInit {
  userStatusIMS = 'Login';
  appUser = 'ims';

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.setAppUser(this.appUser);
  }
}
