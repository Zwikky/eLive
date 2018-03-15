import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FitnessPage } from './fitness';

@NgModule({
  declarations: [
    FitnessPage,
  ],
  imports: [
    IonicPageModule.forChild(FitnessPage),
  ],
})
export class FitnessPageModule {}
