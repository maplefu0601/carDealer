import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-cmslogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class CMSLoginComponent implements OnInit {
  appUser = 'cms';

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.setAppUser(this.appUser);
  }
}
