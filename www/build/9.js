webpackJsonp([9],{

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiNonPageModule", function() { return MultiNonPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multi_non__ = __webpack_require__(452);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MultiNonPageModule = (function () {
    function MultiNonPageModule() {
    }
    MultiNonPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__multi_non__["a" /* MultiNonPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__multi_non__["a" /* MultiNonPage */]),
            ],
        })
    ], MultiNonPageModule);
    return MultiNonPageModule;
}());

//# sourceMappingURL=multi-non.module.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiNonPage; });
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
 * Generated class for the MultiNonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MultiNonPage = (function () {
    function MultiNonPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Concentration = [];
        this.tables = 0;
        this.tableDis = "false";
        this.res = [];
        this.final = [];
    }
    MultiNonPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MultiplecancerPage');
    };
    MultiNonPage.prototype.ngOnChanges = function () {
        console.log("changes done");
    };
    MultiNonPage.prototype.getTableVlaues = function () {
        console.log("this is triggered");
        this.number_of_values = Object.keys(this.Pollutant2).length;
        console.log(this.Pollutant2);
        // You can also build this.res like this instead of the loop below:
        //this.res = Object.keys(this.Pollutant2);                <-------------- Alternate Method
        // Initialize 'res' to empty array.
        //<--------------- Initialize res to empty array
        this.res = [];
        for (var i = 0; i < this.number_of_values; i++) {
            // Check if the element exists before adding to this.res.
            if (this.res.indexOf(i) == -1) {
                this.res.push(i);
            }
            console.log(this.res);
        }
        //this.final=[[res:this.res,values:this.Pollutant2;
    };
    MultiNonPage.prototype.calculate = function () {
        console.log("total is:" + this.Pollutant2);
        this.tables = 4;
        this.tableDis = "true";
        console.log("concentrationis" + this.Concentration);
        var sum = 0;
        for (var i = 0; i < this.number_of_values; i++) {
            //  Convert value to float before muliplication. <----- Added parseFloat
            this.final[i] = parseFloat(this.Pollutant2[i]) / parseFloat(this.Concentration[i]);
            // sum = sum + this.final[i];
            console.log("Concentration[i]" + this.Concentration[i]);
            console.log("Pollutant2[i]" + this.Pollutant2[i]);
            console.log("Final result " + this.final[i]);
        }
        // Sum will have the result of summation of checked*user_input
        // console.log("Sum of (checked*user_input):" + sum);
    };
    MultiNonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-multi-non',template:/*ion-inline-start:"C:\Users\duaaa\Desktop\AbbnaiyApp\src\pages\multi-non\multi-non.html"*/'<!--\n  Generated template for the MultiplecancerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <ion-title>multiple Non cancer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="background-image:url(\'https://www.codeproject.com/KB/mobile/439871/BackgroundImage.png\');background-repeat: no-repeat;background-size: 100% 100%">\n  <ion-list>\n      <ion-item>\n          <ion-label>Select Pollutant </ion-label>\n          <ion-select multiple="true" [(ngModel)]="Pollutant2" placeholder="Pollutant" (ionChange)="getTableVlaues()">\n            <ion-option value="0.0090">Acetaldehyde</ion-option>\n            <ion-option value="0.0000201">Acrolein</ion-option>\n            <ion-option value="0.0020">Acetonitrile</ion-option>\n            <ion-option value="0.000030">Arsenic compounds </ion-option>\n            <ion-option value="0.080">Benzene</ion-option>\n            <ion-option value="0.0000202">Beryllium compounds</ion-option>\n            <ion-option value="0.0020">1,3-Butadiene</ion-option>\n            <ion-option value="0.0000203">Cadmium compounds </ion-option>\n            <ion-option value="0.040">Carbone tetrachloride </ion-option>\n            <ion-option value="0.098">Chloroform </ion-option>\n            <ion-option value="0.00010">Chromium compounds</ion-option>\n            <ion-option value="0.020">1,3-Dichloropropene </ion-option>\n            <ion-option value="0.00080">Ethylene dibromide(1,2-dibromoethane) </ion-option>\n            <ion-option value="2.4">Ethylene dichloride(1,2-dichloroethane) </ion-option>\n            <ion-option value="0.030">Ethylene oxide </ion-option>\n            <ion-option value="0.0098">Formaldehyde </ion-option>\n            <ion-option value="0.0030">Hexachlorobenzene</ion-option>\n            <ion-option value="0.00020">Hydrazine , hydrazine sulfate</ion-option>\n            <ion-option value="0.0015">Lead compounds</ion-option>\n            <ion-option value="0.000050">Manganese compounds </ion-option>\n            <ion-option value="0.00030">Mercury compounds </ion-option>\n            <ion-option value="1.0">Methylene chloride</ion-option>\n            <ion-option value="0.00020">Nickel Compounds</ion-option>\n            <ion-option value="0.0040">Propylene dichloride (1,2-dichloroethane) </ion-option>\n            <ion-option value="0.027">Tetrachloroethylene (perchloroethylene) </ion-option>\n            <ion-option value="0.060">Trichloroethylene(TCE) </ion-option>\n            <ion-option value="0.010">Vinyl chloride </ion-option>\n          </ion-select>\n      </ion-item>\n  </ion-list>\n\n  <ion-item *ngFor="let value of res">\n      <ion-label stacked> Pollutant Concentration in ug / m ^3 </ion-label>\n      <ion-input type="number" [(ngModel)]="Concentration[value]" placeholder="Pollutant Concentration"></ion-input>\n  </ion-item>\n  <button ion-button block (click)="calculate()"> Calculate </button>\n</ion-content>'/*ion-inline-end:"C:\Users\duaaa\Desktop\AbbnaiyApp\src\pages\multi-non\multi-non.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], MultiNonPage);
    return MultiNonPage;
}());

//# sourceMappingURL=multi-non.js.map

/***/ })

});
//# sourceMappingURL=9.js.map