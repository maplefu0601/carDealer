import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-cms-home',
  templateUrl: './cms-home.component.html',
  styleUrls: ['./cms-home.component.scss'],
})
export class CmsHomeComponent implements OnInit {
  searchShow = false;
  userStatusCMS = 'Login';
  appUser = 'cms';

  constructor(private commonService: CommonService) {
    this.searchShow = false;
  }

  ngOnInit() {
    this.commonService.setAppUser(this.appUser);
  }

  showSearch() {
    this.searchShow = !this.searchShow;
  }
}
