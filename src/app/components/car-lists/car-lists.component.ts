import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-car-lists',
  templateUrl: './car-lists.component.html',
  styleUrls: ['./car-lists.component.scss'],
})
export class CarListsComponent implements OnInit {
  @Input() cars: Array<Object>;
  appUser = 'web';

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.setAppUser(this.appUser);
  }
}
