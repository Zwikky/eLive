import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FestivalsPage } from './festivals';

@NgModule({
  declarations: [
    FestivalsPage,
  ],
  imports: [
    IonicPageModule.forChild(FestivalsPage),
  ],
})
export class FestivalsPageModule {}
