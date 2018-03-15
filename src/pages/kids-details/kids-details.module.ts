import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KidsDetailsPage } from './kids-details';

@NgModule({
  declarations: [
    KidsDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(KidsDetailsPage),
  ],
})
export class KidsDetailsPageModule {}
