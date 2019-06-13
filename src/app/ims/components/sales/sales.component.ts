import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  appUser = 'ims';

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.setAppUser(this.appUser);
  }
}
