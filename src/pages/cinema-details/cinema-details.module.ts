import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CinemaDetailsPage } from './cinema-details';

@NgModule({
  declarations: [
    CinemaDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CinemaDetailsPage),
  ],
})
export class CinemaDetailsPageModule {}
