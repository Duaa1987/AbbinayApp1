import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OnePollutantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-one-pollutant',
  templateUrl: 'one-pollutant.html',
})
export class OnePollutantPage {
    total ;
    Pollutant  ;
    Concentration  ;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnePollutantPage');
  }

  calculate(){
    console.log("total");
    var a=this.Pollutant;
    var concentrate=this.Concentration;
    this.total=(a*concentrate)*1000000;
   // alert(this.total)
  }

}
