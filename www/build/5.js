webpackJsonp([5],{

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnePollutantPageModule", function() { return OnePollutantPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__one_pollutant__ = __webpack_require__(456);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OnePollutantPageModule = (function () {
    function OnePollutantPageModule() {
    }
    OnePollutantPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__one_pollutant__["a" /* OnePollutantPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__one_pollutant__["a" /* OnePollutantPage */]),
            ],
        })
    ], OnePollutantPageModule);
    return OnePollutantPageModule;
}());

//# sourceMappingURL=one-pollutant.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnePollutantPage; });
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
 * Generated class for the OnePollutantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OnePollutantPage = (function () {
    function OnePollutantPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    OnePollutantPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OnePollutantPage');
    };
    OnePollutantPage.prototype.calculate = function () {
        console.log("total");
        var a = this.Pollutant;
        var concentrate = this.Concentration;
        this.total = (a * concentrate) * 1000000;
        // alert(this.total)
    };
    OnePollutantPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-one-pollutant',template:/*ion-inline-start:"C:\Users\duaaa\Desktop\AbbnaiyApp\src\pages\one-pollutant\one-pollutant.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>\n        Carcinogenic - Single Pollutant\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding padding style="background-image:url(\'https://www.codeproject.com/KB/mobile/439871/BackgroundImage.png\');background-repeat: no-repeat;background-size: 100% 100%" >\n   \n    <ion-list>\n        <ion-item>\n            <ion-label>Select Pollutant  </ion-label>\n            <ion-select [(ngModel)]="Pollutant" placeholder ="Pollutant" >\n                <ion-option value="0.0000022">Acetaldehyde (75070)</ion-option>\n                <ion-option value="0.000068">Acrylonitrile (107028) </ion-option>\n                <ion-option value="0.0043">Arsenic compounds </ion-option>\n                <ion-option value="0.0000078">Benzene (71432) </ion-option>\n                <ion-option value="0.024">Beryllium compounds </ion-option>\n                <ion-option value="0.000030">1,3-Butadiene (106990) </ion-option>\n                <ion-option value="0.0018">Cadmium compounds </ion-option>\n                <ion-option value="0.000015">Carbone tetrachloride (56235)</ion-option>\n                <ion-option value="0.000023">Chloroform (67663) </ion-option>\n                <ion-option value="0.012">Chromium  compounds</ion-option>\n                <ion-option value="0.00062">Coke Oven Emissions (8007452)</ion-option>\n                <ion-option value="0.0000040">1,3-Dichloropropene(542756) </ion-option>\n                <ion-option value="0.00022">Ethylene dibromide (1,2-dibromoethane)(106934)</ion-option>\n                <ion-option value="0.000026">Ethylene dichloride (1,2-dichloroethane)(107062)</ion-option>\n                <ion-option value="0.000088">Ethylene oxide(75218)</ion-option>\n                <ion-option value="0.000013">Formaldehyde (50000) </ion-option>\n                <ion-option value="0.00046">Hexachlorobenzene(118741)</ion-option>\n                <ion-option value="0.0049">Hydrazine , hydrazine sulfate(302012)</ion-option>\n                <ion-option value="0.000012">Lead compounds</ion-option>\n                <ion-option value="0.00000047">Methyl chloride(dichloromethane)</ion-option>\n                <ion-option value="0.00048">Nickel Compounds</ion-option>\n                <ion-option value="0.00010">Polychlorinated biphenyls(PCBs)(1336363)</ion-option>\n                <ion-option value="0.000055">Polycyclic organic matter</ion-option>\n                <ion-option value="0.00020">Carcinogenic PAHs:7-PAH </ion-option>\n                <ion-option value="0.000019">Propylene dichloride (1,2-dichloroethane) (78875)</ion-option>\n                <ion-option value="0.0034">Quinoline(91225) </ion-option>\n                <ion-option value="0.000058">1,1,2,2-Tetrachloroethane(79345) </ion-option>\n                <ion-option value="0.0000056">Tetrachloroethylene (perchloroethylene) (127184)</ion-option>\n                <ion-option value="0.0000020">Trichloroethylene(TCE)(79016) </ion-option>\n                <ion-option value="0.0000088">Vinyl chloride(75014)</ion-option>\n            </ion-select>\n        </ion-item>\n    </ion-list>\n\n    <ion-item>\n        <ion-label stacked> Life Time Average Exposure in  ug / m ^3  </ion-label>\n        <ion-input type="number" [(ngModel)]="Concentration" placeholder ="Life Time Average Exposure"></ion-input>\n    </ion-item>\n\n    <button ion-button block (click)="calculate()"> Calculate </button>\n\n   \n    <ion-label>Total Carcinogenic Risk probablility  </ion-label>\n    <p>{{total}}</p>\n    <h5>in one million </h5>\n\n\n\n    \n</ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\duaaa\Desktop\AbbnaiyApp\src\pages\one-pollutant\one-pollutant.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], OnePollutantPage);
    return OnePollutantPage;
}());

//# sourceMappingURL=one-pollutant.js.map

/***/ })

});
//# sourceMappingURL=5.js.map