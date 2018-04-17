import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TypeNoncancerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-type-noncancer',
  templateUrl: 'type-noncancer.html',
})
export class TypeNoncancerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypeNoncancerPage');
  }

  goToOnePollutant(): void {
    this.navCtrl.push('OnePollutantNoNcancerPage');
  }

  goTomultiplePollutant(): void {
    this.navCtrl.push(' NonCancerPage ');
  }


}
