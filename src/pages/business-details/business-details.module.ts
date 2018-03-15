import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessDetailsPage } from './business-details';

@NgModule({
  declarations: [
    BusinessDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessDetailsPage),
  ],
})
export class BusinessDetailsPageModule {}
