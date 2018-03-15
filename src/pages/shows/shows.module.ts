import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShowsPage } from './shows';

@NgModule({
  declarations: [
    ShowsPage,
  ],
  imports: [
    IonicPageModule.forChild(ShowsPage),
  ],
})
export class ShowsPageModule {}
