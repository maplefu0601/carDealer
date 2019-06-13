import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  appUser = 'web';
  @Input() car: Object;

  constructor(private commonService: CommonService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.commonService.setAppUser(this.appUser);
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
