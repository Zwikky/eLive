import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReligiousPage } from './religious';

@NgModule({
  declarations: [
    ReligiousPage,
  ],
  imports: [
    IonicPageModule.forChild(ReligiousPage),
  ],
})
export class ReligiousPageModule {}
