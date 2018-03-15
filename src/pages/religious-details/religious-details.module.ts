import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReligiousDetailsPage } from './religious-details';

@NgModule({
  declarations: [
    ReligiousDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReligiousDetailsPage),
  ],
})
export class ReligiousDetailsPageModule {}
