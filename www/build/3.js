webpackJsonp([3],{

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypeNoncancerPageModule", function() { return TypeNoncancerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__type_noncancer__ = __webpack_require__(460);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TypeNoncancerPageModule = (function () {
    function TypeNoncancerPageModule() {
    }
    TypeNoncancerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__type_noncancer__["a" /* TypeNoncancerPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__type_noncancer__["a" /* TypeNoncancerPage */]),
            ],
        })
    ], TypeNoncancerPageModule);
    return TypeNoncancerPageModule;
}());

//# sourceMappingURL=type-noncancer.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeNoncancerPage; });
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
 * Generated class for the TypeNoncancerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TypeNoncancerPage = (function () {
    function TypeNoncancerPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TypeNoncancerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TypeNoncancerPage');
    };
    TypeNoncancerPage.prototype.goToOnePollutant = function () {
        this.navCtrl.push('OnePollutantNoNcancerPage');
    };
    TypeNoncancerPage.prototype.goTomultiplePollutant = function () {
        this.navCtrl.push(' NonCancerPage ');
    };
    TypeNoncancerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-type-noncancer',template:/*ion-inline-start:"C:\Users\duaaa\Desktop\AbbnaiyApp\src\pages\type-noncancer\type-noncancer.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title >\n        Non-Carcinogenic\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="background-image:url(\'https://www.codeproject.com/KB/mobile/439871/BackgroundImage.png\');background-repeat: no-repeat;background-size: 100% 100%">\n  <button ion-button block color="primary" (click)="goToOnePollutant()">\n    One Pollutant\n  </button>\n\n  <button ion-button block color="primary" (click)="goTomultiplePollutant()">\n    Multiple Pollutant \n  </button>\n</ion-content>'/*ion-inline-end:"C:\Users\duaaa\Desktop\AbbnaiyApp\src\pages\type-noncancer\type-noncancer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], TypeNoncancerPage);
    return TypeNoncancerPage;
}());

//# sourceMappingURL=type-noncancer.js.map

/***/ })

});
//# sourceMappingURL=3.js.map