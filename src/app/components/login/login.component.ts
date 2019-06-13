import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  appUser = 'web';

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.setAppUser(this.appUser);
  }
}
