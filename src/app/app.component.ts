import { Component } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { CommonService } from './services/common.service';
import { CMSLoginService } from './cms/services/cmslogin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'carDealer';
  appUser = '';
  appUsers = ['web', 'cms', 'ims'];
  userLoggedin = false;
  userStatusCMS = this.userLoggedin ? 'Logout' : 'Login';
  subscription: Subscription;

  constructor(private commonService: CommonService, private cmsLoginService: CMSLoginService) {
    this.subscription = commonService.subj$.subscribe((val) => {
      console.log(val);
      if (this.appUsers.indexOf(<string>val) !== -1) {
        this.appUser = <string>val;
      } else {
        this.userLoggedin = val === 'login' ? true : false;
        this.userStatusCMS = this.userLoggedin ? 'Logout' : 'Login';
      }
    });
  }
  ngOnInit() {
    this.appUser = this.commonService.getAppUser();
    //this.commonService.getLocation();
  }

  logout() {
    console.log('logout');
    this.cmsLoginService.logout().subscribe(
      (res) => {},
      (err) => {
        console.log(err);
      },
    );
  }
  changeUserStatus() {
    this.userLoggedin = !this.userLoggedin;
    this.userStatusCMS = this.userLoggedin ? 'Logout' : 'Login';
  }
}
