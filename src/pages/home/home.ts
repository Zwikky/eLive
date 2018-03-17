import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController){

  }

  getShows(){
    this.navCtrl.push("ShowsPage");
  }
  

 openLogin(){
  this.navCtrl.push("LoginPage");
}

}
