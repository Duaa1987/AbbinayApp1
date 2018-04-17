import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  goToProfile(): void {
    this.navCtrl.push('ProfilePage');
  }

  goTocancer(): void {
    this.navCtrl.push('CancerPage');
  }

  goToNONcancer(): void {
    this.navCtrl.push('NonCancerPage');
  }

  
}
