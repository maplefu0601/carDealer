import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { CommonService } from '../../services/common.service';

@Injectable({
  providedIn: 'root',
})
export class CMSLoginService {
  uri = environment.local.uri;
  constructor(private http: HttpClient, private commonService: CommonService) {}

  login(userObj) {
    console.log(this.uri);
    let loc = this.commonService.currentLocation;
    userObj.location = loc;
    return this.http.post(`${this.uri}/user/login`, userObj).pipe(
      tap(
        (res) => {
          console.log('logged in as ', res);
          this.commonService.loggedIn(res['userObj']);
        },
        (err) => {
          console.log('login error:', err);
          this.commonService.logout();
        },
      ),
    );
  }

  logout() {
    console.log('logout...');
    let user = this.commonService.getCurrentUser();
    let loc = this.commonService.currentLocation;
    this.commonService.logout();
    return this.http.post(`${this.uri}/user/logout`, { user, location: loc }).pipe(
      tap(
        (res) => {
          console.log('user logged out ', res);
          this.commonService.logout();
        },
        (err) => {
          console.log('logout error:', err);
          this.commonService.logout();
        },
      ),
    );
  }
}
