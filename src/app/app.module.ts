import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { YTPlayerModule, YTPlayerConfig } from 'angular-youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonService } from './services/common.service';
import { CarService } from './services/car.service';
import { CMSLoginService } from './cms/services/cmslogin.service';

import { HomeComponent } from './components/home/home.component';
import { ContactSalesComponent } from './components/contact-sales/contact-sales.component';
import { SearchComponent } from './components/search/search.component';

import { CMSLoginComponent } from './cms/components/login/login.component';
import { ShowRoomComponent } from './components/show-room/show-room.component';
import { CarInformationComponent } from './components/car-information/car-information.component';
import { PromotionAdsComponent } from './cms/components/promotion-ads/promotion-ads.component';
import { CmsHomeComponent } from './cms/components/cms-home/cms-home.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarListsComponent } from './components/car-lists/car-lists.component';

import { ImsHomeComponent } from './ims/components/ims-home/ims-home.component';
import { CarManagementComponent } from './cms/components/car-management/car-management.component';
import { ShowManagementComponent } from './cms/components/show-management/show-management.component';
import { PurchasesComponent } from './ims/components/purchases/purchases.component';
import { SalesComponent } from './ims/components/sales/sales.component';
import { SuppliersComponent } from './ims/components/suppliers/suppliers.component';
import { StaffComponent } from './ims/components/staff/staff.component';
import { CustomersComponent } from './ims/components/customers/customers.component';
import { ServicesComponent } from './ims/components/services/services.component';
import { IMSLoginComponent } from './ims/components/imslogin/imslogin.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CMSLoginComponent,
    ShowRoomComponent,
    CarInformationComponent,
    ContactSalesComponent,
    PromotionAdsComponent,
    SearchComponent,
    CmsHomeComponent,
    CarListComponent,
    CarListsComponent,
    HomeComponent,
    ImsHomeComponent,
    CarManagementComponent,
    ShowManagementComponent,
    PurchasesComponent,
    SalesComponent,
    SuppliersComponent,
    StaffComponent,
    CustomersComponent,
    ServicesComponent,
    IMSLoginComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, ReactiveFormsModule, FormsModule, YTPlayerModule],
  providers: [
    CommonService,
    CarService,
    CMSLoginService,
    { provide: YTPlayerConfig, useValue: { shouldLoadAPI: true, multiplePlaying: false } },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
