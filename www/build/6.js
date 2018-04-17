webpackJsonp([6],{

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnePollutantNoNcancerPageModule", function() { return OnePollutantNoNcancerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__one_pollutant_no_ncancer__ = __webpack_require__(455);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OnePollutantNoNcancerPageModule = (function () {
    function OnePollutantNoNcancerPageModule() {
    }
    OnePollutantNoNcancerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__one_pollutant_no_ncancer__["a" /* OnePollutantNoNcancerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__one_pollutant_no_ncancer__["a" /* OnePollutantNoNcancerPage */]),
            ],
        })
    ], OnePollutantNoNcancerPageModule);
    return OnePollutantNoNcancerPageModule;
}());

//# sourceMappingURL=one-pollutant-no-ncancer.module.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnePollutantNoNcancerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OnePollutantNoNcancerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OnePollutantNoNcancerPage = (function () {
    function OnePollutantNoNcancerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OnePollutantNoNcancerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OnePollutantNoNcancerPage');
    };
    OnePollutantNoNcancerPage.prototype.chooce = function () {
    };
    OnePollutantNoNcancerPage.prototype.calculate = function () {
        switch (this.option) {
            case "1":
                this.Pollutant = 0.0090;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Nasal epithelium";
                this.other = "Growth rate, blood, and kidney";
                this.total = (a / concentrate);
                //alert(this.total);
                break;
            case "2":
                this.Pollutant = 0.00002;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Nasal epithelium";
                this.other = "Mucous membranes (irritation)";
                this.total = (a / concentrate);
                //  alert(this.total);
                break;
            case "3":
                this.Pollutant = 0.002;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Nasal epithelium, brain";
                this.other = "Central nervous system (depression)";
                this.total = (a / concentrate);
                //alert(this.total);
                break;
            case "4":
                this.Pollutant = 0.00003;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Skeleton (fetal malformation)";
                this.other = "Skin and mucous membranes (irritation)";
                this.total = (a / concentrate);
                // alert(this.total);
                break;
            case "5":
                this.Pollutant = 0.00002;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Nasal epithelium";
                this.other = "Growth rate, blood, and kidney";
                this.total = (a / concentrate);
                //alert(this.total);
                break;
            case "6":
                this.Pollutant = 0.06;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Blood, bone marrow";
                this.other = "Central nervous system (depression)";
                this.total = (a / concentrate);
                // alert(this.total);
                break;
            case "7":
                this.Pollutant = 0.008;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Reproductive system";
                this.other = "Cardiovascular system, blood";
                this.total = (a / concentrate);
                //  alert(this.total);
                break;
            case "8":
                this.Pollutant = 0.00002;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Kidney";
                this.other = "Lung";
                this.total = (a / concentrate);
                // alert(this.total);
                break;
            case "9":
                this.Pollutant = 0.04;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Liver";
                this.other = "Kidney";
                this.total = (a / concentrate);
                //alert(this.total);
                break;
            case "10":
                this.Pollutant = 0.98;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Liver, Kidney";
                this.other = "Central nervous system (depression)";
                this.total = (a / concentrate);
                // alert(this.total);
                break;
            case "11":
                this.Pollutant = 0.0001;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Respiratory tract (necrosis)";
                this.other = "Liver, Kidney, GI tract, immune system";
                this.total = (a / concentrate);
                // alert(this.total);
                break;
            case "12":
                this.Pollutant = 0.02;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Nasal epithelium";
                this.other = "Urinary bladder";
                this.total = (a / concentrate);
                // alert(this.total);
                break;
            case "13":
                this.Pollutant = 0.0008;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Reproductive system";
                this.other = "Liver, Kidney, tests";
                this.total = (a / concentrate);
                // alert(this.total);
                break;
            case "14":
                this.Pollutant = 0.24;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Kidney";
                this.other = "Liver";
                this.total = (a / concentrate);
                // alert(this.total);
                break;
            case "15":
                this.Pollutant = 0.03;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "blood";
                this.other = "Eyes, mucous membranes, central nervous system";
                this.total = (a / concentrate);
                // alert(this.total);
                break;
            case "16":
                this.Pollutant = 0.098;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Respiratory epithelium";
                this.other = "Immune system (sensitization)";
                this.total = (a / concentrate);
                // alert(this.total);
                break;
            case "17":
                this.Pollutant = 0.003;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Liver (developmental) ";
                this.other = "Immune system, kidney, blood";
                this.total = (a / concentrate);
                // alert(this.total);
                break;
            case "18":
                this.Pollutant = 0.0002;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Liver, thyroid ";
                this.other = "Respiratory system, spleen ";
                this.total = (a / concentrate);
                // alert(this.total);
                break;
            case "19":
                this.Pollutant = 0.015;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Central nervous system (neurobehavorial effects)";
                this.other = "Blood, cardiovascular system, kidney ";
                this.total = (a / concentrate);
                // alert(this.total);
                break;
            case "20":
                this.Pollutant = 0.00005;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Central nervous system (neurobehavorial effects)";
                this.other = "Respiratory system";
                this.total = (a / concentrate);
                //  alert(this.total);
                break;
            case "21":
                this.Pollutant = 0.0003;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Central nervous system";
                this.other = " ";
                this.total = (a / concentrate);
                //alert(this.total);
                break;
            case "22":
                this.Pollutant = 1;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Liver";
                this.other = "Kidney, cardiovascular system ";
                this.total = (a / concentrate);
                //  alert(this.total);
                break;
            case "23":
                this.Pollutant = 0.0002;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Respiratory system, immune system";
                this.other = " ";
                this.total = (a / concentrate);
                // alert(this.total);
                break;
            case "24":
                this.Pollutant = 0.004;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Nasal epithelium";
                this.other = "Blood";
                this.total = (a / concentrate);
                // alert(this.total);
                break;
            case "25":
                this.Pollutant = 0.270;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Central nervous system (depression)";
                this.other = "Heart, liver, kidney";
                this.total = (a / concentrate);
                //  alert(this.total);
                break;
            case "26":
                this.Pollutant = 0.600;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Central nervous system (depression)";
                this.other = "Liver, kidney ";
                this.total = (a / concentrate);
                // alert(this.total);
                break;
            case "27":
                this.Pollutant = 0.600;
                var a = this.Pollutant;
                var concentrate = this.Concentration;
                this.critical = "Liver";
                this.other = "Kidney, central nervous system (depression)";
                this.total = (a / concentrate);
                // alert(this.total);
                break;
            default:
                confirm("Sorry, that option is not there");
        }
    };
    OnePollutantNoNcancerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-one-pollutant-no-ncancer',template:/*ion-inline-start:"C:\Users\duaaa\Desktop\AbbnaiyApp\src\pages\one-pollutant-no-ncancer\one-pollutant-no-ncancer.html"*/'<ion-header>\n\n  <ion-navbar  color="primary">\n      <ion-title>\n            Non-Carcinogenic  (single Pollutant)\n      </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-image:url(\'https://www.codeproject.com/KB/mobile/439871/BackgroundImage.png\');background-repeat: no-repeat;background-size: 100% 100%">\n    <ion-list>\n        <ion-item>\n            <ion-label>Select Pollutant  </ion-label>\n         <ion-select [(ngModel)]="option" placeholder ="Pollutant" >\n                <ion-option value="1" >Acetaldehyde (75070)</ion-option>\n                <ion-option value="2">Acrolein(107028)</ion-option>\n                <ion-option value="3">Acetonitrile</ion-option>\n                <ion-option value="4">Arsenic compounds</ion-option>\n                <ion-option value="5">Benzene(71432)</ion-option>\n                <ion-option value="6">Beryllium compounds</ion-option>\n                <ion-option value="7">1,3-Butadiene(106990)</ion-option>\n                <ion-option value="8">Cadmium compounds</ion-option>\n                <ion-option value="9">Carbone tetrachloride(56235)</ion-option>\n                <ion-option value="10">Chloroform(67663)</ion-option>\n                <ion-option value="11">Chromium compounds</ion-option>\n                <ion-option value="12">1,3-Dichloropropene</ion-option>\n                <ion-option value="13">Ethylene dibromide(1,2-dibromoethane)(106934)</ion-option>\n                <ion-option value="14">Ethylene dichloride(1,2-dichloroethane)(107062)</ion-option>\n                <ion-option value="15">Ethylene oxide(75218)</ion-option>\n                <ion-option value="16">Formaldehyde(50000) </ion-option>\n                <ion-option value="17">Hexachlorobenzene(118741)</ion-option>\n                <ion-option value="18">Hydrazine , hydrazine sulfate(302012)</ion-option>\n                <ion-option value="19">Lead compounds</ion-option>\n                <ion-option value="20">Manganese compounds </ion-option>\n                <ion-option value="21">Mercury compounds </ion-option>\n                <ion-option value="22">Methylene chloride(75092)</ion-option>\n                <ion-option value="23">Nickel Compounds</ion-option>\n                <ion-option value="24">Propylene dichloride (1,2-dichloroethane)(78875) </ion-option>\n                <ion-option value="25">Tetrachloroethylene (perchloroethylene) </ion-option>\n                <ion-option value="26">Trichloroethylene(TCE) </ion-option>\n                <ion-option value="27">Vinyl chloride  </ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n <ion-item>\n\n        <ion-label stacked> Life Time Average Exposure in  ug / m ^3  </ion-label>\n        <ion-input type="number" [(ngModel)]="Concentration" placeholder ="Life Time Average Exposure"></ion-input>\n    </ion-item>\n\n    <button ion-button block (click)="calculate()"> Calculate </button>\n\n   \n    <ion-label> </ion-label>\n    <p>Hazard Index : {{total}} </p>\n    \n    <p>Target Organ for Chronic Critical Effect : {{critical}} </p>\n    <p>Target Organs for Other Chronic Effects  : {{other}} </p>\n\n\n    \n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\duaaa\Desktop\AbbnaiyApp\src\pages\one-pollutant-no-ncancer\one-pollutant-no-ncancer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], OnePollutantNoNcancerPage);
    return OnePollutantNoNcancerPage;
}());

//# sourceMappingURL=one-pollutant-no-ncancer.js.map

/***/ })

});
//# sourceMappingURL=6.js.map