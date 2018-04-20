import { Component, OnChanges } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MultiplecancerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-multiplecancer',
  templateUrl: 'multiplecancer.html',
})
export class MultiplecancerPage implements OnChanges {
  total;
  Pollutant2;
  Concentration = [];
  tables = 0
  tableDis = "false";
  res = [];
  final = [];
  number_of_values;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MultiplecancerPage');
  }
  ngOnChanges() {
    console.log("changes done");
  }


  getTableVlaues() {
    console.log("this is triggered");
    this.number_of_values = Object.keys(this.Pollutant2).length;
    console.log(this.Pollutant2);

    // You can also build this.res like this instead of the loop below:
    //this.res = Object.keys(this.Pollutant2);                <-------------- Alternate Method

    // Initialize 'res' to empty array.
    //<--------------- Initialize res to empty array

    this.res = [];
    for (let i = 0; i < this.number_of_values; i++) {

      // Check if the element exists before adding to this.res.
      if (this.res.indexOf(i) == -1) {
        this.res.push(i);
      }
      console.log(this.res);
    }
    //this.final=[[res:this.res,values:this.Pollutant2;
  }

  calculate() {
    console.log("total is:" + this.Pollutant2);
    this.tables = 4;
    this.tableDis = "true";
    console.log("concentrationis" + this.Concentration);
    let sum = 0;
    for (let i = 0; i < this.number_of_values; i++) {

      //  Convert value to float before muliplication. <----- Added parseFloat

      this.final[i] = parseFloat(this.Concentration[i]) * parseFloat(this.Pollutant2[i]);
      sum = sum + this.final[i];
      console.log("Final result " + this.final)
    }

    // Sum will have the result of summation of checked*user_input
    console.log("Sum of (checked*user_input):" + sum);
    this.total=sum*1000000;;
  }
}
