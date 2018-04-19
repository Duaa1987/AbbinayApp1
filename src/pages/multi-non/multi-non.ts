import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MultiNonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-multi-non',
  templateUrl: 'multi-non.html',
})
export class MultiNonPage {
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

      /*this.final[i] = parseFloat(this.Pollutant2[i]) /parseFloat(this.Concentration[i]);
     // sum = sum + this.final[i];
       console.log("Concentration[i]"+this.Concentration[i]);
      console.log("Pollutant2[i]"+this.Pollutant2[i]);
      console.log("Final result " + this.final[i]);*/
      
    }

    // Sum will have the result of summation of checked*user_input
   // console.log("Sum of (checked*user_input):" + sum);

   var pollutants = this.Pollutant2;
   var concentration = this.Concentration;

   var pollutant_values = {
     'Acetaldehyde': 0.0090,
     'Acrolein': 0.0000201,
     'Acetonitrile': 0.0020,
     'Arsenic compounds': 0.000030,
     'Benzene': 0.080,
     'Beryllium compounds': 0.000202,
     '1,3-Butadiene':0.0020,
     'Cadmium compounds':0.0000203,
     'Carbon tetrachloride':0.040,
     'Chloroform':0.098,
     'Chromium compounds':0.00010,
     '1,3-Dichloropropene':0.020,
     'Ethylene dibromide (1,2-dibromoethane)':0.00080,
     'Ethylene dichloride (1,2-dichloroethane)':2.4,
     'Ethylene oxide':0.030,
     'Formaldehyde':0.0098,
     'Hexachlorobenzene':0.0030,
     'Hydrazine, hydrazine sulfate':0.00020,
     'Lead compounds':0.0015,
     'Manganese compounds':0.000050,
      'Mercury compounds':0.00030,
      'Methylene chloride':1.0,
      'Nickel compounds':0.00020,
      'Propylene dichloride (1,2-dichloropropane)':0.0040,
      'Tetrachloroethylene (perchloroethylene)':0.027,
      'Trichloroethylene (TCE)':0.060,
      'Vinyl chloride':0.010

   };

   var pollutant_affect_organ = {
      'Acetaldehyde': ['Nasal epithelium', 'Brain'],
      'Acrolein': ['Nasal epithelium'],
      'Acetonitrile': ['Nasal epithelium'],
      'Arsenic compounds':['Skeleton(fetal malformation)'],
      'Benzene': ['Blood', 'bone marrow'],
      'Beryllium compounds': ['Lung'],
      '1,3-Butadiene':['Reproductive system'],
      'Cadmium compounds':['Kidney'],
      'Carbon tetrachloride':['Liver'],
      'Chloroform':['Kidney', 'Liver'],
      'Chromium compounds':['Respiratory tract (necrosis)'],
      '1,3-Dichloropropene':['Nasal epithelium'],
      'Ethylene dibromide (1,2-dibromoethane)':['Reproductive system'],
      'Ethylene dichloride (1,2-dichloroethane)':['Kidney'],
      'Ethylene oxide':['Blood'],
      'Formaldehyde':['Respiratory epithelium'],
      'Hexachlorobenzene':['Liver (developmental)'],
      'Hydrazine, hydrazine sulfate':['Liver','thyroid'],
      'Lead compounds':['Central nervous system (neurobehavorial effects)'],
      'Manganese compounds':['Central nervous system (neurobehavorial effects)'],
      'Mercury compounds':['Central nervous system'],
      'Methylene chloride':['Liver'],
      'Nickel compounds':['Respiratory system', 'immune system'],
      'Propylene dichloride (1,2-dichloropropane)':['Nasal epithelium'],
      'Tetrachloroethylene (perchloroethylene)':['Central nervous system (depression)'],
      'Trichloroethylene (TCE)':['Central nervous system (depression)'],
      'Vinyl chloride':['Liver']

    
   };

   var other = {
      'Acetaldehyde': ['Growth rate', 'blood', 'kidney'],
      'Acrolein': ['Mucous membranes (irritation)'],
      'Acetonitrile': ['Central nervous system (depression)'],
      'Arsenic compounds':['Skin and mucous membranes (irritation)'],
      'Benzene': ['Central nervous system (depression)'],
      'Beryllium compounds': ['Immune system'],
      '1,3-Butadiene':['Cardiovascular system, blood'],
      'Cadmium compounds':['Lung'],
      'Carbon tetrachloride':['Kidney'],
      'Chloroform':['Central nervous system (depression)'],
      'Chromium compounds':['Liver, Kidney, GI tract, immune system'],
      '1,3-Dichloropropene':['Urinary bladder'],
      'Ethylene dibromide (1,2-dibromoethane)':['Liver, Kidney, tests'],
      'Ethylene dichloride (1,2-dichloroethane)':['Liver'],
      'Ethylene oxide':['Eyes, mucous membranes, central nervous system'],
      'Formaldehyde':['Immune system (sensitization)'],
      'Hexachlorobenzene':['Immune system, kidney, blood'],
      'Hydrazine, hydrazine sulfate':['Respiratory system, spleen'],
      'Lead compounds':['Blood, cardiovascular system, kidney'],
      'Manganese compounds':['Respiratory system'],
      'Mercury compounds':['Central nervous system'],
      'Methylene chloride':['Kidney, cardiovascular system'],
      'Nickel compounds':['Respiratory system', 'immune system'],
      'Propylene dichloride (1,2-dichloropropane)':['Blood'],
      'Tetrachloroethylene (perchloroethylene)':['Heart, liver, kidney'],
      'Trichloroethylene (TCE)':['Liver, kidney'],
      'Vinyl chloride':['Kidney, central nervous system (depression)']
    };

   var pollutants_count = pollutants.length;
   var output = {
      'Nasal epithelium': [],
      'Brain': [],
      'Blood':[],
      'Skeleton(fetal malformation)':[],
      'bone marrow':[],
      'Lung':[],
      'Kidney':[],
      'Central nervous system (depression)':[],
      'Liver':[],
      'Central nervous system (neurobehavorial effects)':[],
      'Reproductive system':[],
      'Respiratory epithelium':[],
      'Respiratory tract (necrosis)':[],
      'Liver (developmental)':[],
      'Central nervous system':[],
      'Respiratory system':[],
      'immune system':[],
      'thyroid':[],

   };

   for(var i=0; i<pollutants_count; i++) {
      var pollutant = pollutants[i];
      var affected_organs = pollutant_affect_organ[pollutant];
      for(var j=0; j<affected_organs.length; j++) {
          var result = (parseFloat(pollutant_values[pollutant])/ parseFloat(concentration[i]))
          output[affected_organs[j]].push(result);
      }
   }

   for(var key in output) {
     if(output.hasOwnProperty(key)){
        var organ_output = output[key];
        var summation = 0;
        for(var i=0;i<organ_output.length;i++) {
          summation = summation + organ_output[i];
          console.log(other[key]);
        }
        
        if(summation>0)
        console.log("Organ- "+key+' Sum- '+summation ,+other[key]);
       
    }
   }

  }

}
