import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-contact-sales',
  templateUrl: './contact-sales.component.html',
  styleUrls: ['./contact-sales.component.scss'],
})
export class ContactSalesComponent implements OnInit {
  appUser = 'web';
  msg = { name: '', email: '', phone: '', content: "Hi, I'm interested in this car, please let me know more detail." };

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.setAppUser(this.appUser);
  }
}
