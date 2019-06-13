import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { ShowRoomComponent } from './components/show-room/show-room.component';
import { CarInformationComponent } from './components/car-information/car-information.component';
import { ContactSalesComponent } from './components/contact-sales/contact-sales.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './components/login/login.component';

import { CMSLoginComponent } from './cms/components/login/login.component';
import { CmsHomeComponent } from './cms/components/cms-home/cms-home.component';
import { ShowManagementComponent } from './cms/components/show-management/show-management.component';
import { CarManagementComponent } from './cms/components/car-management/car-management.component';
import { PromotionAdsComponent } from './cms/components/promotion-ads/promotion-ads.component';

import { ImsHomeComponent } from './ims/components/ims-home/ims-home.component';
import { CustomersComponent } from './ims/components/customers/customers.component';
import { PurchasesComponent } from './ims/components/purchases/purchases.component';
import { SuppliersComponent } from './ims/components/suppliers/suppliers.component';
import { SalesComponent } from './ims/components/sales/sales.component';
import { StaffComponent } from './ims/components/staff/staff.component';
import { ServicesComponent } from './ims/components/services/services.component';
import { IMSLoginComponent } from './ims/components/imslogin/imslogin.component';

const routes: Routes = [
  { path: 'home', redirectTo: '' },
  { path: '', component: HomeComponent },
  { path: 'contactSales', component: ContactSalesComponent },
  { path: 'search', component: SearchComponent },
  { path: 'showRoom', component: ShowRoomComponent },
  { path: 'carInfo', component: CarInformationComponent },
  { path: 'login', component: LoginComponent },

  { path: 'cms', redirectTo: 'cms/home' },
  { path: 'cms/home', component: CmsHomeComponent },
  { path: 'cms/login', component: CMSLoginComponent },
  { path: 'cms/promotions', component: PromotionAdsComponent },
  { path: 'cms/car', component: CarManagementComponent },
  { path: 'cms/show', component: ShowManagementComponent },

  { path: 'ims', redirectTo: 'ims/home' },
  { path: 'ims/home', component: ImsHomeComponent },
  { path: 'ims/customers', component: CustomersComponent },
  { path: 'ims/purchases', component: PurchasesComponent },
  { path: 'ims/sales', component: SalesComponent },
  { path: 'ims/services', component: ServicesComponent },
  { path: 'ims/staff', component: StaffComponent },
  { path: 'ims/suppliers', component: SuppliersComponent },
  { path: 'ims/login', component: IMSLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
