import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OnePollutantNoNcancerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-one-pollutant-no-ncancer',
  templateUrl: 'one-pollutant-no-ncancer.html',
})
export class OnePollutantNoNcancerPage {
  total;
  Pollutant;
  Concentration;
  option: any;
  critical;
  other;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnePollutantNoNcancerPage');
  }

  chooce() {

  }
  calculate() {

    switch (this.option) {
      case "1":
        this.Pollutant = 0.0090;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Nasal epithelium";
        this.other = "Growth rate, blood, and kidney";
        this.total = (concentrate/a);
        //alert(this.total);
        break;
      case "2":
        this.Pollutant = 0.00002;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Nasal epithelium";
        this.other = "Mucous membranes (irritation)";
        this.total = (concentrate/a);
      //  alert(this.total);
        break;
      case "3":
        this.Pollutant = 0.002;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Nasal epithelium, brain";
        this.other = "Central nervous system (depression)";
        this.total = (concentrate/a);
        //alert(this.total);
        break;
      case "4":
        this.Pollutant = 0.00003;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Skeleton (fetal malformation)";
        this.other = "Skin and mucous membranes (irritation)";
        this.total = (concentrate/a);
       // alert(this.total);
        break;
      case "5":
        this.Pollutant = 0.06;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Blood, bone marrow";
        this.other = "Central nervous system (depression)";
        this.total = (concentrate/a);
       // alert(this.total);
        break;
      case "6":
        this.Pollutant = 0.00002;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Lung";
        this.other = "Immune system";
        this.total = (concentrate/a);
      //  alert(this.total);
        break;
      case "7":
        this.Pollutant = 0.008;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Reproductive system";
        this.other = "Cardiovascular system, blood";
        this.total = (concentrate/a);
      //  alert(this.total);
        break;
      case "8":
        this.Pollutant = 0.00002;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Kidney";
        this.other = "Lung";
        this.total = (concentrate/a);
       // alert(this.total);
        break;
      case "9":
        this.Pollutant = 0.04;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Liver";
        this.other = "Kidney";
        this.total = (concentrate/a);
        //alert(this.total);
        break;
      case "10":
        this.Pollutant = 0.098;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Liver, Kidney";
        this.other = "Central nervous system (depression)";
        this.total = (concentrate/a);
       // alert(this.total);
        break;
      case "11":
        this.Pollutant = 0.0001;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Respiratory tract (necrosis)";
        this.other = "Liver, Kidney, GI tract, immune system";
        this.total = (concentrate/a);
       // alert(this.total);
        break;
      case "12":
        this.Pollutant = 0.02;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Nasal epithelium";
        this.other = "Urinary bladder";
        this.total = (concentrate/a);
       // alert(this.total);
        break;
      case "13":
        this.Pollutant = 0.0008;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Reproductive system";
        this.other = "Liver, Kidney, tests";
        this.total = (concentrate/a);
       // alert(this.total);
        break;
      case "14":
        this.Pollutant = 2.4;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Kidney";
        this.other = "Liver";
        this.total = (concentrate/a);
       // alert(this.total);
        break;
      case "15":
        this.Pollutant = 0.03;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "blood";
        this.other = "Eyes, mucous membranes, central nervous system";
        this.total = (concentrate/a);
       // alert(this.total);
        break;
      case "16":
        this.Pollutant = 0.0098;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Respiratory epithelium";
        this.other = "Immune system (sensitization)";
        this.total = (concentrate/a);
       // alert(this.total);
        break;
      case "17":
        this.Pollutant = 0.003;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Liver (developmental) ";
        this.other = "Immune system, kidney, blood";
        this.total = (concentrate/a);
       // alert(this.total);
        break;
      case "18":
        this.Pollutant = 0.0002;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Liver, thyroid ";
        this.other = "Respiratory system, spleen ";
        this.total = (concentrate/a);
       // alert(this.total);
        break;
      case "19":
        this.Pollutant = 0.0015;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Central nervous system (neurobehavorial effects)";
        this.other = "Blood, cardiovascular system, kidney ";
        this.total = (concentrate/a);
       // alert(this.total);
        break;
      case "20":
        this.Pollutant = 0.00005;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Central nervous system (neurobehavorial effects)";
        this.other = "Respiratory system";
        this.total = (concentrate/a);
      //  alert(this.total);
        break;
      case "21":
        this.Pollutant = 0.0003;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Central nervous system";
        this.other = " ";
        this.total = (concentrate/a);
        //alert(this.total);
        break;
      case "22":
        this.Pollutant = 1;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Liver";
        this.other = "Kidney, cardiovascular system ";
        this.total = (concentrate/a);
      //  alert(this.total);
        break;
      case "23":
        this.Pollutant = 0.0002;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Respiratory system, immune system";
        this.other = " ";
        this.total = (concentrate/a);
       // alert(this.total);
        break;
      case "24":
        this.Pollutant = 0.004;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Nasal epithelium";
        this.other = "Blood";
        this.total = (concentrate/a);
       // alert(this.total);
        break;
      case "25":
        this.Pollutant = 0.270;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Central nervous system (depression)";
        this.other = "Heart, liver, kidney";
        this.total = (concentrate/a);
      //  alert(this.total);
        break;
      case "26":
        this.Pollutant = 0.600;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Central nervous system (depression)";
        this.other = "Liver, kidney ";
        this.total = (concentrate/a);
       // alert(this.total);
        break;
      case "27":
        this.Pollutant = 0.1;
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.critical = "Liver";
        this.other = "Kidney, central nervous system (depression)";
        this.total = (concentrate/a);
       // alert(this.total);
        break;
      default:
        confirm("Sorry, that option is not there");
    }

  }
}
