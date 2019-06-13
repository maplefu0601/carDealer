import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-imslogin',
  templateUrl: './imslogin.component.html',
  styleUrls: ['./imslogin.component.scss'],
})
export class IMSLoginComponent implements OnInit {
  appUser = 'ims';

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.setAppUser(this.appUser);
  }
}
