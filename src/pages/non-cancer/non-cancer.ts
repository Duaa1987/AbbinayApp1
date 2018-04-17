import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NonCancerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-non-cancer',
  templateUrl: 'non-cancer.html',
})
export class NonCancerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NonCancerPage');
  }

  goToOnePollutant(): void {
    this.navCtrl.push('OnePollutantNoNcancerPage');
  }

  goTomultiplePollutant(): void {
    this.navCtrl.push('MultiNonPage');
  }
}
