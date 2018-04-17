import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CancerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cancer',
  templateUrl: 'cancer.html',
})
export class CancerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancerPage');
  }

  goToOnePollutant(): void {
    this.navCtrl.push('OnePollutantPage');
  }

  goTomultiplePollutant(): void {
    this.navCtrl.push('MultiplecancerPage');
  }
  
}
