(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero {\r\n    background-image: url('/assets/img/admin.jpg') !important;\r\n    background-repeat: no-repeat;\r\n  }\r\n  button{\r\n    font-weight: bold;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlEQUF5RDtJQUN6RCw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVybyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2FkbWluLmpwZycpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIH1cclxuICBidXR0b257XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-fullheight-with-navbar\">\r\n  <div class=\"hero-body\">\r\n<div  class=\"col-md-12  text-center\">\r\n  <br><br>  \r\n  <button class=\"btn btn-outline-dark\" routerLink=\"../sendEnvelope\" >Process Donation Request and Send Prepaid Envelope</button>\r\n  <br><br>\r\n  <button class=\"btn btn-outline-dark\" routerLink=\"../receiveAndValidate\">Receive and Validate frames</button>\r\n  <br><br>\r\n  <button class=\"btn btn-outline-dark\" routerLink=\"../processFrame\" >Process Frame Request</button>\r\n  <br><br>\r\n  <button class=\"btn btn-outline-dark\" routerLink=\"../processDonation\">Process Donation</button>\r\n  </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/alert/alert.component.css":
/*!*******************************************!*\
  !*** ./src/app/alert/alert.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/alert/alert.component.html":
/*!********************************************!*\
  !*** ./src/app/alert/alert.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"message.cssClass\">{{message.text}}\r\n    <a class=\"close\" (click)=\"removeAlert()\">&times;</a>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/alert/alert.component.ts":
/*!******************************************!*\
  !*** ./src/app/alert/alert.component.ts ***!
  \******************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert.service */ "./src/app/alert/alert.service.ts");



var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getAlert()
            .subscribe(function (message) {
            switch (message && message.type) {
                case 'success':
                    message.cssClass = 'alert alert-success';
                    break;
                case 'error':
                    message.cssClass = 'alert alert-danger';
                    break;
            }
            _this.message = message;
        });
    };
    AlertComponent.prototype.removeAlert = function () {
        this.alertService.clear();
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.css */ "./src/app/alert/alert.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_alert_service__WEBPACK_IMPORTED_MODULE_2__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/alert/alert.service.ts":
/*!****************************************!*\
  !*** ./src/app/alert/alert.service.ts ***!
  \****************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert message
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.clear = function () {
        // clear by calling subject.next() without parameters
        this.subject.next();
    };
    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _donor_input_donor_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./donor-input/donor-input.component */ "./src/app/donor-input/donor-input.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _donor_donor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./donor/donor.component */ "./src/app/donor/donor.component.ts");
/* harmony import */ var _process_donor_envelope_process_donor_envelope_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./process-donor-envelope/process-donor-envelope.component */ "./src/app/process-donor-envelope/process-donor-envelope.component.ts");
/* harmony import */ var _benef_input_benef_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./benef-input/benef-input.component */ "./src/app/benef-input/benef-input.component.ts");
/* harmony import */ var _recieve_validate_frame_ReceiveAndValidate_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recieve-validate-frame/ReceiveAndValidate.component */ "./src/app/recieve-validate-frame/ReceiveAndValidate.component.ts");
/* harmony import */ var _process_donation_process_donation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./process-donation/process-donation.component */ "./src/app/process-donation/process-donation.component.ts");
/* harmony import */ var _process_frame_request_process_frame_request_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./process-frame-request/process-frame-request.component */ "./src/app/process-frame-request/process-frame-request.component.ts");
/* harmony import */ var _match_frame_service_match_frame_service_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./match-frame-service/match-frame-service.component */ "./src/app/match-frame-service/match-frame-service.component.ts");
/* harmony import */ var _dropoff_Dropoff_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dropoff/Dropoff.component */ "./src/app/dropoff/Dropoff.component.ts");
/* harmony import */ var _selfPaidEnvelope_SelfPaidEnvelope_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./selfPaidEnvelope/SelfPaidEnvelope.component */ "./src/app/selfPaidEnvelope/SelfPaidEnvelope.component.ts");















var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'donor', component: _donor_input_donor_input_component__WEBPACK_IMPORTED_MODULE_4__["DonorInputComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"] },
    { path: 'donor-opts', component: _donor_donor_component__WEBPACK_IMPORTED_MODULE_6__["DonorComponent"] },
    { path: 'sendEnvelope', component: _process_donor_envelope_process_donor_envelope_component__WEBPACK_IMPORTED_MODULE_7__["ProcessDonorEnvelopeComponent"] },
    { path: 'beneficiary', component: _benef_input_benef_input_component__WEBPACK_IMPORTED_MODULE_8__["BenefInputComponent"] },
    { path: 'receiveAndValidate', component: _recieve_validate_frame_ReceiveAndValidate_component__WEBPACK_IMPORTED_MODULE_9__["ReceiveAndValidateComponent"] },
    { path: 'processFrame', component: _process_frame_request_process_frame_request_component__WEBPACK_IMPORTED_MODULE_11__["ProcessFrameRequestComponent"] },
    { path: 'processDonation', component: _process_donation_process_donation_component__WEBPACK_IMPORTED_MODULE_10__["ProcessDonationComponent"] },
    { path: 'matchFrame', component: _match_frame_service_match_frame_service_component__WEBPACK_IMPORTED_MODULE_12__["MatchFrameServiceComponent"] },
    { path: 'dropoff', component: _dropoff_Dropoff_component__WEBPACK_IMPORTED_MODULE_13__["DropoffComponent"] },
    { path: 'selfPaidEnvelope', component: _selfPaidEnvelope_SelfPaidEnvelope_component__WEBPACK_IMPORTED_MODULE_14__["SelfPaidEnvelopeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* * {\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  body {\r\n    font-family: Arial;\r\n    height: 100%;\r\n  } */\r\n  \r\n  /* Header/Blog Title */\r\n  \r\n  /* .header {\r\n    padding: 30px;\r\n    text-align: center;\r\n    background: white;\r\n  }\r\n  \r\n  .header h1 {\r\n    font-size: 50px;\r\n    color : brown;\r\n  } */\r\n  \r\n  /*Fixed Footer for all pages*/\r\n  \r\n  /* .footer {\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n    text-align: center;\r\n   } */\r\n  \r\n  /* Style the top navigation bar */\r\n  \r\n  /* .topnav {\r\n    overflow: hidden;\r\n    background-color: black;\r\n  }\r\n   */\r\n  \r\n  /* Style the topnav links */\r\n  \r\n  /* .topnav a {\r\n    float: left;\r\n    display: block;\r\n    color: #f2f2f2;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n  } */\r\n  \r\n  /* Change color on hover */\r\n  \r\n  /* .topnav a:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  } */\r\n  \r\n  /* Create two unequal columns that floats next to each other */\r\n  \r\n  /* Left column */\r\n  \r\n  /* .leftcolumn {   \r\n    float: left;\r\n    width: 75%;\r\n  }\r\n   */\r\n  \r\n  /* Right column */\r\n  \r\n  /* .rightcolumn {\r\n    float: left;\r\n    width: 25%;\r\n    background-color: #f1f1f1;\r\n    padding-left: 20px;\r\n  } */\r\n  \r\n  /* Fake image */\r\n  \r\n  /* .fakeimg {\r\n    background-color: #aaa;\r\n    width: 100%;\r\n    padding: 20px;\r\n  } */\r\n  \r\n  /* Add a card effect for articles */\r\n  \r\n  /* .card {\r\n    background-color: white;\r\n    padding: 20px;\r\n    margin-top: 20px;\r\n  } */\r\n  \r\n  /* Clear floats after the columns */\r\n  \r\n  /* .row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n  \r\n  custom-modal {\r\n    display: none;\r\n}\r\n\r\n.custom-modal {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1000;\r\n    overflow: auto;\r\n}\r\n\r\n.custom-modal-body {\r\n    padding: 20px;\r\n    background: #fff;\r\n    margin: 40px;\r\n }\r\n.custom-modal-background {\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-color: #000;\r\n    opacity: 0.75;\r\n    z-index: 900;\r\n }\r\n \r\n .custom-modal-open {\r\n    overflow: hidden;\r\n } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7S0FPSzs7RUFFSCxzQkFBc0I7O0VBQ3RCOzs7Ozs7Ozs7S0FTRzs7RUFDSCw2QkFBNkI7O0VBQzdCOzs7OztNQUtJOztFQUVKLGlDQUFpQzs7RUFDakM7Ozs7SUFJRTs7RUFDRiwyQkFBMkI7O0VBQzNCOzs7Ozs7O0tBT0c7O0VBRUgsMEJBQTBCOztFQUMxQjs7O0tBR0c7O0VBRUgsOERBQThEOztFQUM5RCxnQkFBZ0I7O0VBQ2hCOzs7O0lBSUU7O0VBQ0YsaUJBQWlCOztFQUNqQjs7Ozs7S0FLRzs7RUFFSCxlQUFlOztFQUNmOzs7O0tBSUc7O0VBRUgsbUNBQW1DOztFQUNuQzs7OztLQUlHOztFQUVILG1DQUFtQzs7RUFDbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBc0NFIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH0gKi9cclxuICBcclxuICAvKiBIZWFkZXIvQmxvZyBUaXRsZSAqL1xyXG4gIC8qIC5oZWFkZXIge1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuaGVhZGVyIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGNvbG9yIDogYnJvd247XHJcbiAgfSAqL1xyXG4gIC8qRml4ZWQgRm9vdGVyIGZvciBhbGwgcGFnZXMqL1xyXG4gIC8qIC5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIH0gKi9cclxuICBcclxuICAvKiBTdHlsZSB0aGUgdG9wIG5hdmlnYXRpb24gYmFyICovXHJcbiAgLyogLnRvcG5hdiB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gICAqL1xyXG4gIC8qIFN0eWxlIHRoZSB0b3BuYXYgbGlua3MgKi9cclxuICAvKiAudG9wbmF2IGEge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjZjJmMmYyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH0gKi9cclxuICBcclxuICAvKiBDaGFuZ2UgY29sb3Igb24gaG92ZXIgKi9cclxuICAvKiAudG9wbmF2IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9ICovXHJcbiAgXHJcbiAgLyogQ3JlYXRlIHR3byB1bmVxdWFsIGNvbHVtbnMgdGhhdCBmbG9hdHMgbmV4dCB0byBlYWNoIG90aGVyICovXHJcbiAgLyogTGVmdCBjb2x1bW4gKi9cclxuICAvKiAubGVmdGNvbHVtbiB7ICAgXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgfVxyXG4gICAqL1xyXG4gIC8qIFJpZ2h0IGNvbHVtbiAqL1xyXG4gIC8qIC5yaWdodGNvbHVtbiB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIH0gKi9cclxuICBcclxuICAvKiBGYWtlIGltYWdlICovXHJcbiAgLyogLmZha2VpbWcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9ICovXHJcbiAgXHJcbiAgLyogQWRkIGEgY2FyZCBlZmZlY3QgZm9yIGFydGljbGVzICovXHJcbiAgLyogLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9ICovXHJcbiAgXHJcbiAgLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXHJcbiAgLyogLnJvdzphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgXHJcbiAgY3VzdG9tLW1vZGFsIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5jdXN0b20tbW9kYWwge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTAwMDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uY3VzdG9tLW1vZGFsLWJvZHkge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW46IDQwcHg7XHJcbiB9XHJcbi5jdXN0b20tbW9kYWwtYmFja2dyb3VuZCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgb3BhY2l0eTogMC43NTtcclxuICAgIHotaW5kZXg6IDkwMDtcclxuIH1cclxuIFxyXG4gLmN1c3RvbS1tb2RhbC1vcGVuIHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiB9ICovIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n \r\n<!-- <div>\r\n    <div class=\"col-sm-4 float-right\">\r\n    <app-alert></app-alert>\r\n    </div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n <footer>\r\n  <nav>\r\n\r\n  <ul class=\"footer\">\r\n    <a routerLink=\"../home\">Home |</a>\r\n    <a href=\"#\">About |</a>\r\n    <a href=\"#\">Logout</a>\r\n  </ul>\r\n  </nav>\r\n</footer> -->\r\n<app-header></app-header>\r\n    <!-- routes will be rendered here -->\r\n    <router-outlet></router-outlet>\r\n    <!-- footer -->\r\n    <app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'iframex';
        this.donorRoute = 'donor';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");
/* harmony import */ var _donor_input_donor_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./donor-input/donor-input.component */ "./src/app/donor-input/donor-input.component.ts");
/* harmony import */ var _donor_donor_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./donor/donor.component */ "./src/app/donor/donor.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _process_donor_envelope_process_donor_envelope_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./process-donor-envelope/process-donor-envelope.component */ "./src/app/process-donor-envelope/process-donor-envelope.component.ts");
/* harmony import */ var _benef_input_benef_input_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./benef-input/benef-input.component */ "./src/app/benef-input/benef-input.component.ts");
/* harmony import */ var _recieve_validate_frame_ReceiveAndValidate_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./recieve-validate-frame/ReceiveAndValidate.component */ "./src/app/recieve-validate-frame/ReceiveAndValidate.component.ts");
/* harmony import */ var _process_frame_request_process_frame_request_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./process-frame-request/process-frame-request.component */ "./src/app/process-frame-request/process-frame-request.component.ts");
/* harmony import */ var _match_frame_match_frame_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./match-frame/match-frame.component */ "./src/app/match-frame/match-frame.component.ts");
/* harmony import */ var _match_frame_service_match_frame_service_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./match-frame-service/match-frame-service.component */ "./src/app/match-frame-service/match-frame-service.component.ts");
/* harmony import */ var _process_donation_process_donation_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./process-donation/process-donation.component */ "./src/app/process-donation/process-donation.component.ts");
/* harmony import */ var _alert_alert_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./alert/alert.component */ "./src/app/alert/alert.component.ts");
/* harmony import */ var _dropoff_Dropoff_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dropoff/Dropoff.component */ "./src/app/dropoff/Dropoff.component.ts");
/* harmony import */ var _selfPaidEnvelope_SelfPaidEnvelope_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./selfPaidEnvelope/SelfPaidEnvelope.component */ "./src/app/selfPaidEnvelope/SelfPaidEnvelope.component.ts");
/* harmony import */ var _modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modal.component */ "./src/app/modal.component.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modal.service */ "./src/app/modal.service.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _donor_input_donor_input_component__WEBPACK_IMPORTED_MODULE_8__["DonorInputComponent"],
                _donor_donor_component__WEBPACK_IMPORTED_MODULE_9__["DonorComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"],
                _process_donor_envelope_process_donor_envelope_component__WEBPACK_IMPORTED_MODULE_13__["ProcessDonorEnvelopeComponent"],
                _benef_input_benef_input_component__WEBPACK_IMPORTED_MODULE_14__["BenefInputComponent"],
                _recieve_validate_frame_ReceiveAndValidate_component__WEBPACK_IMPORTED_MODULE_15__["ReceiveAndValidateComponent"],
                _process_frame_request_process_frame_request_component__WEBPACK_IMPORTED_MODULE_16__["ProcessFrameRequestComponent"],
                _match_frame_match_frame_component__WEBPACK_IMPORTED_MODULE_17__["MatchFrameComponent"],
                _match_frame_service_match_frame_service_component__WEBPACK_IMPORTED_MODULE_18__["MatchFrameServiceComponent"],
                _process_donation_process_donation_component__WEBPACK_IMPORTED_MODULE_19__["ProcessDonationComponent"],
                _alert_alert_component__WEBPACK_IMPORTED_MODULE_20__["AlertComponent"],
                _match_frame_service_match_frame_service_component__WEBPACK_IMPORTED_MODULE_18__["MatchFrameServiceComponent"],
                _dropoff_Dropoff_component__WEBPACK_IMPORTED_MODULE_21__["DropoffComponent"],
                _selfPaidEnvelope_SelfPaidEnvelope_component__WEBPACK_IMPORTED_MODULE_22__["SelfPaidEnvelopeComponent"],
                _modal_component__WEBPACK_IMPORTED_MODULE_23__["ModalComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_25__["HeaderComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_26__["FooterComponent"]
            ],
            entryComponents: [_match_frame_match_frame_component__WEBPACK_IMPORTED_MODULE_17__["MatchFrameComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__["AgGridModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_logger__WEBPACK_IMPORTED_MODULE_7__["LoggerModule"].forRoot({
                    level: ngx_logger__WEBPACK_IMPORTED_MODULE_7__["NgxLoggerLevel"].TRACE,
                    disableConsoleLogging: false
                })
            ],
            providers: [_modal_service__WEBPACK_IMPORTED_MODULE_24__["ModalService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/benef-input/benef-input.component.css":
/*!*******************************************************!*\
  !*** ./src/app/benef-input/benef-input.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .div {\r\n    background-color: lightblue;\r\n    width: 110px;\r\n    height: 110px;\r\n    overflow: auto;\r\n  } \r\n   #table-scroll {\r\n    height:150px;\r\n    overflow:auto;  \r\n    margin-top:20px;\r\n  }  */\r\n\r\n  .form-group.required .control-label:after {\r\n    content:\"*\";\r\n    color:red;\r\n  }\r\n\r\n  .hero {\r\n    background-image: url('/assets/img/abc.jpg') !important;\r\n    background-repeat: no-repeat;\r\nbackground-position: right 10px top 0px;\r\nbackground-color:#e6e6e6;\r\n  }\r\n\r\n  form label {font-weight:bold; color:#593b2a}\r\n\r\n  table th {font-weight:bold; color:#593b2a ; background-color: darkgrey;}\r\n\r\n  table  {background-color:#e6e6e6; font-weight:bold;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVuZWYtaW5wdXQvYmVuZWYtaW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztNQVVNOztFQUVKO0lBQ0UsV0FBVztJQUNYLFNBQVM7RUFDWDs7RUFDQTtJQUNFLHVEQUF1RDtJQUN2RCw0QkFBNEI7QUFDaEMsdUNBQXVDO0FBQ3ZDLHdCQUF3QjtFQUN0Qjs7RUFDQSxZQUFZLGdCQUFnQixFQUFFLGFBQWE7O0VBQzNDLFVBQVUsZ0JBQWdCLEVBQUUsY0FBYyxFQUFFLDBCQUEwQixDQUFDOztFQUN2RSxRQUFRLHdCQUF3QixFQUFFLGdCQUFnQixDQUFDIiwiZmlsZSI6InNyYy9hcHAvYmVuZWYtaW5wdXQvYmVuZWYtaW5wdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5kaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gIH0gXHJcbiAgICN0YWJsZS1zY3JvbGwge1xyXG4gICAgaGVpZ2h0OjE1MHB4O1xyXG4gICAgb3ZlcmZsb3c6YXV0bzsgIFxyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gIH0gICovXHJcblxyXG4gIC5mb3JtLWdyb3VwLnJlcXVpcmVkIC5jb250cm9sLWxhYmVsOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6XCIqXCI7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgfVxyXG4gIC5oZXJvIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWcvYWJjLmpwZycpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAxMHB4IHRvcCAwcHg7XHJcbmJhY2tncm91bmQtY29sb3I6I2U2ZTZlNjtcclxuICB9XHJcbiAgZm9ybSBsYWJlbCB7Zm9udC13ZWlnaHQ6Ym9sZDsgY29sb3I6IzU5M2IyYX1cclxuICB0YWJsZSB0aCB7Zm9udC13ZWlnaHQ6Ym9sZDsgY29sb3I6IzU5M2IyYSA7IGJhY2tncm91bmQtY29sb3I6IGRhcmtncmV5O31cclxuICB0YWJsZSAge2JhY2tncm91bmQtY29sb3I6I2U2ZTZlNjsgZm9udC13ZWlnaHQ6Ym9sZDt9Il19 */"

/***/ }),

/***/ "./src/app/benef-input/benef-input.component.html":
/*!********************************************************!*\
  !*** ./src/app/benef-input/benef-input.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-medium-with-navbar\">\r\n  <div class=\"hero-body\">\r\n<form [formGroup]=\"addForm\"  (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"col-md-5\">\r\n  <div [formGroup]=\"userForm\">\r\n    <div class=\"form-group required\">\r\n        <label for=\"formUserName\" class=\"control-label col-form-label col-form-label-sm\">Full Name</label>\r\n        <input type=\"text\" class=\"form-control form-control-sm\" id=\"formUserName\" formControlName=\"name\"\r\n          placeholder=\"Enter Your Name\" [ngClass]=\"{ 'is-invalid': submitted && f.errors }\" />\r\n          <div *ngIf=\"submitted && f.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"f.errors.required\">First Name is required</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-group required\">\r\n          <label for=\"forEmail\" class=\"control-label col-form-label col-form-label-sm\">Email address</label>\r\n          <input type=\"email\" class=\"form-control form-control-sm\" id=\"forEmail\" formControlName=\"emailId\"\r\n            aria-describedby=\"emailHelp\"  [ngClass]=\"{ 'is-invalid': submitted && g.errors }\" placeholder=\"Enter Your Email\" />\r\n            <div *ngIf=\"submitted && g.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"g.errors.required\">Email is required</div>\r\n              <div *ngIf=\"g.errors.email\">Email must be a valid email address</div>\r\n          </div>\r\n         <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\r\n        </div>\r\n        <div class=\"form-group required\">\r\n          <label for=\"formMobile\" class=\"control-label col-form-label col-form-label-sm\">Phone</label>\r\n          <input type=\"number\" class=\"form-control form-control-sm\" id=\"formMobile\" formControlName=\"mobile\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && j.errors }\" placeholder=\"Enter Your Mobile Number\" />\r\n            <div *ngIf=\"submitted && j.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"j.errors.required\">Contact Number is required</div>\r\n          </div>\r\n        </div>\r\n      \r\n      <div [formGroup] =\"addressForm\">\r\n           <div  class=\"form-row\">  \r\n            <div class=\"form-group required\">\r\n              <label for=\"formStreet2\" class=\"control-label col-form-label col-form-label-sm\">Address</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm\" id=\"formStreet2\" formControlName=\"addressLine1\"\r\n              [ngClass]=\"{ 'is-invalid': submitted && h.errors }\" placeholder=\"Enter Your Street Address\" />\r\n              <div *ngIf=\"submitted && h.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"h.errors.required\">Address is required</div>\r\n            </div>\r\n            </div>\r\n             <div class=\"form-group required\"> \r\n              <label for=\"formcity\" class=\"control-label col-form-label col-form-label-sm\">City</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm\" id=\"formcity\" formControlName=\"city\"\r\n              [ngClass]=\"{ 'is-invalid': submitted && k.errors }\" placeholder=\"Enter Your City\" />\r\n              <div *ngIf=\"submitted && k.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"k.errors.required\">City is required</div>\r\n            </div>\r\n            </div>  \r\n            </div> \r\n          \r\n       <div class=\"form-row\">\r\n            <div class=\"form-group required\">\r\n    \r\n              <label for=\"formState\" class=\"control-label col-form-label col-form-label-sm\">State</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm\" id=\"formState\" formControlName=\"state\"\r\n              [ngClass]=\"{ 'is-invalid': submitted && l.errors }\" placeholder=\"Enter your State\" />\r\n              <div *ngIf=\"submitted && l.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"l.errors.required\">State is required</div>\r\n            </div>\r\n            </div>\r\n            <div class=\"form-group required\">\r\n              <label for=\"formZip\" class=\"control-label col-form-label col-form-label-sm\">ZIP/Postal Code</label>\r\n              <input type=\"number\" class=\"form-control form-control-sm\" id=\"formZip\" formControlName=\"zipcode\"\r\n              [ngClass]=\"{ 'is-invalid': submitted && m.errors }\" placeholder=\"Enter your Postal Code\" />\r\n              <div *ngIf=\"submitted && m.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"m.errors.required\">ZipCode is required</div>\r\n            </div>\r\n            </div>\r\n            <div class=\"form-group required\">\r\n              <label for=\"formCountry\" class=\"control-label col-form-label col-form-label-sm\">Country</label>\r\n              <input type=\"text\" class=\"form-control form-control-sm\" id=\"formCountry\" formControlName=\"country\"\r\n              [ngClass]=\"{ 'is-invalid': submitted && n.errors }\" placeholder=\"Enter your Country\" />\r\n              <div *ngIf=\"submitted && n.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"n.errors.required\">Country is required</div>\r\n            </div>\r\n            </div>\r\n            </div>  \r\n          \r\n        </div> \r\n      </div> \r\n      <div class=\"form-group\">\r\n        <label for=\"formRemarks\" class=\"control-label col-form-label col-form-label-sm\">Remarks</label>\r\n        <input type=\"text\" class=\"form-control form-control-sm\" id=\"formRemarks\" formControlName=\"remarks\"\r\n          placeholder=\"Enter additional information\" />\r\n      </div>\r\n\t<div id=\"table-scroll\">\r\n\t\t<table  class=\"table\">\r\n\t\t\t<thead class=\"thead-light\">\r\n          <!-- <label   class=\"col-form-label\">Frame Details</label> -->\r\n        <tr>\r\n        <button  type=\"button\"  class=\"btn btn-secondary btn-sm\" [disabled]=\"showFrame\" (click)=\"onAddRow()\" *ngIf=\"addForm.get('frameRequests')\">Add Frame</button>\r\n        </tr>\r\n        <tr>    \r\n          <th>Gender</th>    \r\n          <th>Size</th>    \r\n          <th>Color</th>    \r\n          <th>Material</th>  \r\n          <th></th>  \r\n      </tr> \r\n\t\t\t</thead>\r\n\t\t\t<tbody>\r\n\t\t\t\t<tr *ngFor=\"let row of addForm.get('frameRequests')?.controls;let index = index;\">\r\n          <td>\r\n              <select  [formControl]=\"row.get('gender')\">  \r\n                  <option value=\"female\">Female</option>\r\n                  <option value=\"male\">Male</option>\r\n            </select>\r\n          </td>\r\n          <td>\r\n              <select  [formControl]=\"row.get('size')\">  \r\n                  <option value=\"XS\">XS</option>      \r\n                  <option value=\"S\">S</option>\r\n                  <option value=\"L\">M</option>\r\n                  <option value=\"M\">L</option>\r\n                  <option value=\"XL\">XL</option>\r\n             </select>\r\n            <!-- <input [formControl]=\"row.get('size')\"> -->\r\n          </td>\r\n          <td>\r\n              <select  [formControl]=\"row.get('color')\">\r\n                  <option value=\"black\">Black</option>\r\n                  <option value=\"silver\">Silver</option>\r\n                  <option value=\"brown\">Brown</option>\r\n                  <option value=\"gold\">Gold</option>\r\n                </select>\r\n          </td>\r\n          <td>\r\n             <select [formControl]=\"row.get('material')\">\r\n             <option value=\"metal\">Metal</option>\r\n             <option value=\"plastic\">Plastic</option>\r\n             <option value=\"fiber\">Fiber</option>\r\n             </select>\r\n          </td>\r\n          <td>\r\n            <button  type=\"button\"  class=\"btn btn-secondary btn-sm\" (click)=\"onRemoveRow(index)\">Remove</button>\r\n          </td>\r\n\t\t\t\t</tr>\r\n\t\t\t</tbody>\r\n\t\t</table>\r\n\r\n  </div>\r\n<div>\r\n  <button type=\"submit\" class=\"btn btn-primary  ml-3\">Submit</button>\r\n  <br><br>\r\n</div>\r\n</div> \r\n</form>\r\n</div>\r\n</section>\r\n<custom-modal id=\"custom-modal-1\">\r\n  <h4>{{modalText}}</h4>\r\n  <div style=\"text-align:center;\"><button (click)=\"closeModal('custom-modal-1');\">Close</button></div>\r\n</custom-modal>\r\n  <!-- </div> -->\r\n \r\n<!-- <pre>{{addForm.value | json}}</pre> -->"

/***/ }),

/***/ "./src/app/benef-input/benef-input.component.ts":
/*!******************************************************!*\
  !*** ./src/app/benef-input/benef-input.component.ts ***!
  \******************************************************/
/*! exports provided: BenefInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenefInputComponent", function() { return BenefInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");
/* harmony import */ var _benef_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./benef-request-service */ "./src/app/benef-input/benef-request-service.ts");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert/alert.service */ "./src/app/alert/alert.service.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal.service */ "./src/app/modal.service.ts");








var BenefInputComponent = /** @class */ (function () {
    // @ViewChild('alert') alert: ElementRef;
    function BenefInputComponent(fb, logger, alertService, benReqService, modalService) {
        // this.addForm = this.fb.group({
        //   remarks: new FormControl( ''),
        //   status: new FormControl('BEN_REQ_INITIATED')
        // });
        // this.userForm = this.fb.group({
        //   name: ['', Validators.required],
        //   emailId: ['', [Validators.required, Validators.email]],
        //   mobile: ['', Validators.required]
        // });
        this.fb = fb;
        this.logger = logger;
        this.alertService = alertService;
        this.benReqService = benReqService;
        this.modalService = modalService;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        this.submitted = false;
        // showMsg: boolean = false;
        this.showFrame = false;
        // this.addressForm = this.fb.group({
        //   addressLine1: ['', Validators.required],
        //   city: ['', Validators.required],
        //   state: ['', Validators.required],
        //   zipcode: ['', Validators.required],
        //   country: ['', Validators.required]
        // });
        // this.rows = this.fb.array([]);
    }
    BenefInputComponent.prototype.createFormGroupWithBuilderAndModel = function (formBuilder) {
        this.addForm = this.fb.group({
            remarks: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('BEN_REQ_INITIATED')
        });
        this.userForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            emailId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.addressForm = this.fb.group({
            addressLine1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            zipcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.rows = this.fb.array([]);
        this.addForm.addControl('frameRequests', this.rows);
        this.addForm.addControl('user', this.userForm);
        this.userForm.addControl('address', this.addressForm);
        return this.addForm;
    };
    BenefInputComponent.prototype.ngOnInit = function () {
        // this.addForm.addControl('frameRequests', this.rows);
        // this.addForm.addControl('user', this.userForm);
        // this.userForm.addControl('address', this.addressForm);
        this.addForm = this.createFormGroupWithBuilderAndModel(this.fb);
    };
    BenefInputComponent.prototype.onAddRow = function () {
        this.rows.push(this.createItemFormGroup());
        this.logger.debug("Row length" + this.rows.length);
        if (this.rows.length == 5) {
            this.logger.debug("Form Array Row length is" + this.rows.length);
            this.showFrame = true;
        }
    };
    BenefInputComponent.prototype.scrollWin = function () {
        window.scrollBy(0, 10);
    };
    BenefInputComponent.prototype.onRemoveRow = function (rowIndex) {
        if (this.showFrame)
            this.showFrame = false;
        this.rows.removeAt(rowIndex);
    };
    BenefInputComponent.prototype.createItemFormGroup = function () {
        this.scrollWin();
        return this.fb.group({
            gender: [''],
            size: [''],
            color: [''],
            material: [''],
            status: ['FRAME_REQ_INITAITED']
        });
    };
    Object.defineProperty(BenefInputComponent.prototype, "f", {
        get: function () { return this.userForm.get('name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenefInputComponent.prototype, "g", {
        get: function () { return this.userForm.get('emailId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenefInputComponent.prototype, "j", {
        get: function () { return this.userForm.get('mobile'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenefInputComponent.prototype, "h", {
        get: function () { return this.addressForm.get('addressLine1'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenefInputComponent.prototype, "k", {
        get: function () { return this.addressForm.get('city'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenefInputComponent.prototype, "l", {
        get: function () { return this.addressForm.get('state'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenefInputComponent.prototype, "m", {
        get: function () { return this.addressForm.get('zipcode'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BenefInputComponent.prototype, "n", {
        get: function () { return this.addressForm.get('country'); },
        enumerable: true,
        configurable: true
    });
    // closeAlert() {
    //   this.alert.nativeElement.classList.remove('show');
    // }
    BenefInputComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.addForm.invalid) {
            return;
        }
        var result = Object.assign({}, this.addForm.value);
        this.logger.debug("Beneficiary Form is::" + JSON.stringify(result));
        var observer = this.benReqService.createBenRequest(result);
        observer.subscribe(function (data) {
            _this.submitted = false;
            _this.showFrame = false;
            _this.logger.debug("recieved" + JSON.stringify(data));
            // this.alertService.success('Success! Data Submitted Successfully!', true);
            _this.addForm = _this.createFormGroupWithBuilderAndModel(_this.fb);
            _this.modalText = "Thank you for approaching us. We will get back you Soon.";
            _this.openModal();
        }, function (error) {
            // this.alertService.error(error);
            _this.modalText = error;
            _this.openModal();
        });
    };
    BenefInputComponent.prototype.openModal = function () {
        this.modalService.open('custom-modal-1');
    };
    BenefInputComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    BenefInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-benef-input',
            template: __webpack_require__(/*! ./benef-input.component.html */ "./src/app/benef-input/benef-input.component.html"),
            providers: [_benef_request_service__WEBPACK_IMPORTED_MODULE_5__["BenRequestService"]],
            styles: [__webpack_require__(/*! ./benef-input.component.css */ "./src/app/benef-input/benef-input.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"], _alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], _benef_request_service__WEBPACK_IMPORTED_MODULE_5__["BenRequestService"], _modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]])
    ], BenefInputComponent);
    return BenefInputComponent;
}());



/***/ }),

/***/ "./src/app/benef-input/benef-request-service.ts":
/*!******************************************************!*\
  !*** ./src/app/benef-input/benef-request-service.ts ***!
  \******************************************************/
/*! exports provided: BenRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BenRequestService", function() { return BenRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");







var BenRequestService = /** @class */ (function () {
    function BenRequestService(http, logger) {
        this.http = http;
        this.logger = logger;
        this.userRequestUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + 'beneficiaryRequests';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // POST /donorRequest Rest API
    BenRequestService.prototype.createBenRequest = function (benRequest) {
        return this.http.post(this.userRequestUrl, benRequest, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    BenRequestService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
            if (error.status == 0) {
                errorMessage = "Please try again after sometimes. Check the Http Response";
            }
            else {
                // Get server-side error
                errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
            }
        }
        window.alert(errorMessage);
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    ;
    BenRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_logger__WEBPACK_IMPORTED_MODULE_6__["NGXLogger"]])
    ], BenRequestService);
    return BenRequestService;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n    background: grey;\r\n    padding: 0px;\r\n    font-size: bold;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7RUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogZ3JleTtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGZvbnQtc2l6ZTogYm9sZDtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <footer class=\"footer\">\r\n    <div class=\"container\">\r\n    <div class=\"content has-text-centered\">\r\n      <p>\r\n        About | Help | Contact Us <br>\r\n        Designed and Owned by The BaaB-Bee Team\r\n      </p>\r\n    </div>\r\n    </div>\r\n    </footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a, u {\r\n    text-decoration: none;\r\n}\r\n\r\nh3 {\r\n    font-family:Lucida Sans Unicode;\r\n}\r\n\r\nh1 {\r\n    font-family:Arial;\r\n}\r\n\r\n.navbar-dropdown{\r\n    background-color:#ffdd57;\r\n    font-size: 16px;\r\n}\r\n\r\n.navbar-item.is-hoverable:hover .navbar-dropdown {\r\n    display: block !important;\r\n}\r\n\r\n.navbar-item.is-hoverable:focus-within .navbar-dropdown {\r\n    display: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSwrQkFBK0I7QUFDbkM7O0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEsIHUge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LWZhbWlseTpMdWNpZGEgU2FucyBVbmljb2RlO1xyXG59XHJcbmgxIHtcclxuICAgIGZvbnQtZmFtaWx5OkFyaWFsO1xyXG59XHJcbi5uYXZiYXItZHJvcGRvd257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmRkNTc7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuLm5hdmJhci1pdGVtLmlzLWhvdmVyYWJsZTpob3ZlciAubmF2YmFyLWRyb3Bkb3duIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdmJhci1pdGVtLmlzLWhvdmVyYWJsZTpmb2N1cy13aXRoaW4gLm5hdmJhci1kcm9wZG93biB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar is-warning\" role=\"navigation\" aria-label=\"main navigation\">\r\n  <!-- logo -->\r\n  <div class=\"navbar-brand\">\r\n  <!-- <a class=\"navbar-item\"> -->\r\n     <img src=\"assets/img/Baabbee_logo.jpg\" width=\"80\" height=\"80\" >  \r\n <!--    </a> -->\r\n  </div>\r\n  <!-- menu -->\r\n  <div class=\"navbar-menu\">\r\n    <div class=\"navbar-start has-text-weight-semibold\">\r\n      <a class=\"navbar-item\" routerLink=\"../home\">HOME</a> \r\n      <div class=\"navbar-item has-dropdown is-hoverable\">\r\n      <a class=\"navbar-link\" routerLink=\"../donor\">DONATE FRAMES</a> \r\n      <div class=\"navbar-dropdown is-boxed\">\r\n          <a class=\"navbar-item\"  routerLink=\"../donor\">\r\n              Prepaid Envelope\r\n            </a>\r\n            <a class=\"navbar-item\"  routerLink=\"../dropoff\">\r\n                Dropoff in a location\r\n            </a>\r\n            <a class=\"navbar-item\"  routerLink=\"../selfPaidEnvelope\">\r\n               Self Paid Envelope\r\n            </a>\r\n      </div>\r\n      </div>\r\n      <a class=\"navbar-item\" routerLink=\"../beneficiary\">NEED FRAMES</a> \r\n       <a class=\"navbar-item\" routerLink=\"../admin\">ADMIN LOGIN</a> \r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/donor-input/donor-input.component.css":
/*!*******************************************************!*\
  !*** ./src/app/donor-input/donor-input.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-group.required .control-label:after {\r\n    content:\"*\";\r\n    color:red;\r\n  }  \r\n  form label {font-weight:bold; color:#593b2a}  \r\n  .hero {\r\n    background-image: url('/assets/img/abc.jpg') !important;\r\n    background-repeat: no-repeat;\r\nbackground-position: right 10px top 0px;\r\nbackground-color:#e6e6e6;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9ub3ItaW5wdXQvZG9ub3ItaW5wdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxTQUFTO0VBQ1g7RUFDQSxZQUFZLGdCQUFnQixFQUFFLGFBQWE7RUFFM0M7SUFDRSx1REFBdUQ7SUFDdkQsNEJBQTRCO0FBQ2hDLHVDQUF1QztBQUN2Qyx3QkFBd0I7RUFDdEIiLCJmaWxlIjoic3JjL2FwcC9kb25vci1pbnB1dC9kb25vci1pbnB1dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tZ3JvdXAucmVxdWlyZWQgLmNvbnRyb2wtbGFiZWw6YWZ0ZXIge1xyXG4gICAgY29udGVudDpcIipcIjtcclxuICAgIGNvbG9yOnJlZDtcclxuICB9ICBcclxuICBmb3JtIGxhYmVsIHtmb250LXdlaWdodDpib2xkOyBjb2xvcjojNTkzYjJhfVxyXG5cclxuICAuaGVybyB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2FiYy5qcGcnKSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMTBweCB0b3AgMHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiNlNmU2ZTY7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/donor-input/donor-input.component.html":
/*!********************************************************!*\
  !*** ./src/app/donor-input/donor-input.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-medium-with-navbar\">\r\n  <div class=\"hero-body\">\r\n<form [formGroup]=\"donorForm\" class=\"ml-2\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n  <div class=\"form-group required\">\r\n    <label for=\"formFrameCount\" class=\"control-label col-form-label col-form-label-sm\">Frame Count</label>\r\n    <input type=\"number\" class=\"form-control form-control-sm col-3\" id=\"formFrameCount\" formControlName=\"envelopeSize\"\r\n      placeholder=\"Enter total number of frames\"  [ngClass]=\"{ 'is-invalid': submitted && f.errors }\" />\r\n      <div *ngIf=\"submitted && f.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"f.errors.required\">Number of count to be donated is required</div>\r\n    </div>\r\n    </div>\r\n  <div formGroupName=\"user\">\r\n    <div class=\"form-group required\" >\r\n      <label for=\"formUserName\" class=\"control-label col-form-label col-form-label-sm\">Full Name</label>\r\n      <input type=\"text\" class=\"form-control form-control-sm col-3\" id=\"formUserName\" formControlName=\"name\"\r\n        placeholder=\"Enter Your Name\" [ngClass]=\"{ 'is-invalid': submitted && f.errors }\" />\r\n        <div *ngIf=\"submitted && f.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"f.errors.required\">First Name is required</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-row\">\r\n      <div class=\"form-group col-3\">\r\n        <label for=\"forEmail\" class=\"col-form-label col-form-label-sm\">Email address</label>\r\n        <input type=\"email\" class=\"form-control form-control-sm\" id=\"forEmail\" formControlName=\"emailId\"\r\n        [ngClass]=\"{ 'is-invalid': submitted && g.errors }\" placeholder=\"Enter Your Email\" />\r\n       <!-- <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small> -->\r\n       <div *ngIf=\"submitted && g.errors\" class=\"invalid-feedback\">\r\n        <div *ngIf=\"g.errors.email\">Email must be a valid email address</div>\r\n    </div>\r\n      </div>\r\n      <div class=\"form-group col-3\">\r\n        <label for=\"formMobile\" class=\"col-form-label col-form-label-sm\">Phone</label>\r\n        <input type=\"number\" class=\"form-control form-control-sm\" id=\"formMobile\" formControlName=\"mobile\"\r\n        [ngClass]=\"{ 'is-invalid': submitted && j.errors }\" placeholder=\"Enter Your Mobile Number\" />\r\n        <!-- <div *ngIf=\"submitted && j.errors\" class=\"invalid-feedback\">\r\n          <div *ngIf=\"j.errors?.maxlength\">10 digits only</div>\r\n      </div> -->\r\n      </div>\r\n    </div>\r\n    <div formGroupName=\"address\" novalidate>\r\n      <div class=\"form-group required\">\r\n        <label for=\"formStreet1\" class=\"control-label col-form-label col-form-label-sm\">Address Line 1</label>\r\n        <input type=\"text\" class=\"form-control form-control-sm col-6\" id=\"formStreet1\" formControlName=\"addressLine1\"\r\n        [ngClass]=\"{ 'is-invalid': submitted && h.errors }\" placeholder=\"Enter Your Street Address\" />\r\n          <div *ngIf=\"submitted && h.errors\" class=\"invalid-feedback\">\r\n            <div *ngIf=\"h.errors.required\">Address is required</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group col-3\">\r\n          <label for=\"formStreet2\" class=\"col-form-label col-form-label-sm\">Address Line 2</label>\r\n          <input type=\"text\" class=\"form-control form-control-sm\" id=\"formStreet2\" formControlName=\"addressLine2\"\r\n            placeholder=\"Enter Your Street Address 2\" />\r\n        </div>\r\n        <div class=\"form-group required col-3\">\r\n          <label for=\"formcity\" class=\"control-label col-form-label col-form-label-sm\">City</label>\r\n          <input type=\"text\" class=\"form-control form-control-sm\" id=\"formcity\" formControlName=\"city\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && k.errors }\"   placeholder=\"Enter Your City\" />\r\n            <div *ngIf=\"submitted && k.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"k.errors.required\">City is required</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"form-row\">\r\n        <div class=\"form-group required col-3\">\r\n\r\n          <label for=\"formState\" class=\"control-label col-form-label col-form-label-sm\">State</label>\r\n          <input type=\"text\" class=\"form-control form-control-sm\" id=\"formState\" formControlName=\"state\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && l.errors }\" placeholder=\"Enter your State\" />\r\n            <div *ngIf=\"submitted && l.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"l.errors.required\">State is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group required col-3\">\r\n          <label for=\"formZip\" class=\"control-label col-form-label col-form-label-sm\">ZIP/Postal Code</label>\r\n          <input type=\"number\" class=\"form-control form-control-sm\" id=\"formZip\" formControlName=\"zipcode\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && m.errors }\" placeholder=\"Enter your Postal Code\" />\r\n            <div *ngIf=\"submitted && m.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"m.errors.required\">ZipCode is required</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group required col-3\">\r\n          <label for=\"formCountry\" class=\"control-label col-form-label col-form-label-sm\">Country</label>\r\n          <input type=\"text\" class=\"form-control form-control-sm\" id=\"formCountry\" formControlName=\"country\"\r\n          [ngClass]=\"{ 'is-invalid': submitted && n.errors }\" placeholder=\"Enter your Country\" />\r\n            <div *ngIf=\"submitted && n.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"n.errors.required\">Country is required</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <button type=\"submit\" class=\"btn btn-primary  ml-3\">Submit</button>\r\n  <!-- <button type=\"button\" [disabled]=\"donorForm.pristine\" (click)=\"resetForm()\">Reset</button> -->\r\n\r\n\r\n  <!-- <div class=\"row\"  *ngIf=\"showMsg\">\r\n      <div  #alert class=\"alert alert-success alert-dismissible fade show\" role=\"alert\">\r\n          <strong>Success! Data Submitted Successfully!</strong>\r\n          <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeAlert()\"> \r\n            <span aria-hidden=\"true\">&times;</span></button> \r\n    </div>\r\n  </div> -->\r\n</form>\r\n\r\n<custom-modal id=\"custom-modal-1\">\r\n  <h4>{{modalText}}</h4>\r\n  <div style=\"text-align:center;\"><button (click)=\"closeModal('custom-modal-1');\">Close</button></div>\r\n</custom-modal>\r\n  </div>\r\n</section>\r\n<!--\r\n  The view then calls the methods exposed by the controller in the usual way:\r\n\r\n<div class=\"col-md-6 col-md-offset-3\">\r\n    <h1>Home</h1>\r\n    <p>{{bodyText}}</p>\r\n    <button (click)=\"openModal('custom-modal-1')\">Open Modal 1</button>\r\n    <button (click)=\"openModal('custom-modal-2')\">Open Modal 2</button>\r\n</div>\r\n-->"

/***/ }),

/***/ "./src/app/donor-input/donor-input.component.ts":
/*!******************************************************!*\
  !*** ./src/app/donor-input/donor-input.component.ts ***!
  \******************************************************/
/*! exports provided: DonorInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorInputComponent", function() { return DonorInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");
/* harmony import */ var _donor_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./donor-request-service */ "./src/app/donor-input/donor-request-service.ts");
/* harmony import */ var _alert_alert_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../alert/alert.service */ "./src/app/alert/alert.service.ts");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal.service */ "./src/app/modal.service.ts");








var DonorInputComponent = /** @class */ (function () {
    // @ViewChild('alert') alert: ElementRef;
    function DonorInputComponent(formBuilder, donService, logger, alertService, modalService) {
        //Creating the form group with model
        this.formBuilder = formBuilder;
        this.donService = donService;
        this.logger = logger;
        this.alertService = alertService;
        this.modalService = modalService;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseUrl;
        //showMsg: boolean = false;
        this.submitted = false;
    }
    DonorInputComponent.prototype.ngOnInit = function () {
        this.donorForm = this.createFormGroupWithBuilderAndModel(this.formBuilder);
    };
    // This method instantiate the donor form
    DonorInputComponent.prototype.createFormGroupWithBuilderAndModel = function (formBuilder) {
        return formBuilder.group({
            envelopeSize: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: 'DON_REQ_INITIATED',
            user: formBuilder.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                emailId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email],
                mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)],
                address: formBuilder.group({
                    addressLine1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    addressLine2: [''],
                    city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    zipcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                    country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
                })
            })
        });
    };
    Object.defineProperty(DonorInputComponent.prototype, "f", {
        get: function () { return this.donorForm.get('user.name'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DonorInputComponent.prototype, "g", {
        get: function () { return this.donorForm.get('user.emailId'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DonorInputComponent.prototype, "j", {
        get: function () { return this.donorForm.get('user.mobile'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DonorInputComponent.prototype, "h", {
        get: function () { return this.donorForm.get('user.address.addressLine1'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DonorInputComponent.prototype, "k", {
        get: function () { return this.donorForm.get('user.address.city'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DonorInputComponent.prototype, "l", {
        get: function () { return this.donorForm.get('user.address.state'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DonorInputComponent.prototype, "m", {
        get: function () { return this.donorForm.get('user.address.zipcode'); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DonorInputComponent.prototype, "n", {
        get: function () { return this.donorForm.get('user.address.country'); },
        enumerable: true,
        configurable: true
    });
    // closeAlert() {
    //   this.alert.nativeElement.classList.remove('show');
    // }
    DonorInputComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // reset alerts on submit
        // this.alertService.clear();
        if (this.donorForm.invalid) {
            return;
        }
        var result = Object.assign({}, this.donorForm.value);
        result.user = Object.assign({}, result.user);
        result.user.address = Object.assign({}, result.user.address);
        this.logger.debug("Donor Form is::" + JSON.stringify(result));
        // let url = this.baseUrl+ 'donorRequests';
        // this.logger.debug("Donor Form Post URL is::"+url);
        var observer = this.donService.createDonRequest(result);
        // let observer = this.http.post(url,result,{headers : new HttpHeaders({ 'Content-Type': 'application/json' })});
        observer.subscribe(function (response) {
            _this.response = response;
            _this.logger.debug("recieved" + JSON.stringify(_this.response));
            _this.donorForm = _this.createFormGroupWithBuilderAndModel(_this.formBuilder);
            _this.submitted = false;
            //error handling 
            // this.showMsg = true;
            //this.alertService.success('Success! Data Submitted Successfully!', true);
            _this.modalText = "Thank you for Dononating Eye Frames to IFramex Organization!";
            _this.openModal();
        }, function (error) {
            //this.alertService.error(error);
            _this.modalText = error;
            _this.openModal();
        });
    };
    DonorInputComponent.prototype.openModal = function () {
        this.modalService.open('custom-modal-1');
    };
    DonorInputComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    DonorInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-donor-input',
            template: __webpack_require__(/*! ./donor-input.component.html */ "./src/app/donor-input/donor-input.component.html"),
            providers: [_donor_request_service__WEBPACK_IMPORTED_MODULE_5__["DonRequestService"]],
            styles: [__webpack_require__(/*! ./donor-input.component.css */ "./src/app/donor-input/donor-input.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _donor_request_service__WEBPACK_IMPORTED_MODULE_5__["DonRequestService"], ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"], _alert_alert_service__WEBPACK_IMPORTED_MODULE_6__["AlertService"], _modal_service__WEBPACK_IMPORTED_MODULE_7__["ModalService"]])
    ], DonorInputComponent);
    return DonorInputComponent;
}());



/***/ }),

/***/ "./src/app/donor-input/donor-request-service.ts":
/*!******************************************************!*\
  !*** ./src/app/donor-input/donor-request-service.ts ***!
  \******************************************************/
/*! exports provided: DonRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonRequestService", function() { return DonRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");







var DonRequestService = /** @class */ (function () {
    function DonRequestService(http, logger) {
        this.http = http;
        this.logger = logger;
        this.userRequestUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + 'donorRequests';
        this.statusUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + 'donorRequests/search?status=DON_REQ_INITIATED,DON_REQ_PREPAID_SENT';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // POST /donorRequest Rest API
    DonRequestService.prototype.createDonRequest = function (donRequest) {
        return this.http.post(this.userRequestUrl, donRequest, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    // GET  /donorRequest/search API
    DonRequestService.prototype.findByStatus = function () {
        return this.http.get(this.statusUrl, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ;
    DonRequestService.prototype.updateStatus = function (id) {
        return this.http.patch(this.userRequestUrl + '/' + id, { "status": "DON_REQ_PREPAID_SENT" }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    DonRequestService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
            if (error.status == 0) {
                errorMessage = "Please try again after sometimes. Check the Http Response";
            }
            else {
                // Get server-side error
                errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
            }
        }
        window.alert(errorMessage);
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    ;
    DonRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_logger__WEBPACK_IMPORTED_MODULE_6__["NGXLogger"]])
    ], DonRequestService);
    return DonRequestService;
}());



/***/ }),

/***/ "./src/app/donor/donor.component.css":
/*!*******************************************!*\
  !*** ./src/app/donor/donor.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-list-radio {\r\n    left: 35%;\r\n    top: 0%;\r\n    position: absolute;\r\n}\r\n/* .hero {\r\n    background-image: url('/assets/img/canyon.jpg') !important;\r\n    background-size: cover;\r\n    background-position: center center;\r\n  } */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9ub3IvZG9ub3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxPQUFPO0lBQ1Asa0JBQWtCO0FBQ3RCO0FBQ0E7Ozs7S0FJSyIsImZpbGUiOiJzcmMvYXBwL2Rvbm9yL2Rvbm9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1saXN0LXJhZGlvIHtcclxuICAgIGxlZnQ6IDM1JTtcclxuICAgIHRvcDogMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuLyogLmhlcm8ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltZy9jYW55b24uanBnJykgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIH0gKi8iXX0= */"

/***/ }),

/***/ "./src/app/donor/donor.component.html":
/*!********************************************!*\
  !*** ./src/app/donor/donor.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"hero is-fullheight-with-navbar\">\r\n  <div class=\"hero-body\">\r\n    <div class=\"container\">\r\n<form   [formGroup] = \"donorComp\" class=\"form-list-radio\" (ngSubmit) = \"onClickSubmit(donorComp.value)\">\r\n  <div class=\"custom-control custom-radio\">\r\n    <input type=\"radio\" class=\"custom-control-input\"   formControlName=\"donorCompOpts\" id=\"exampleRadios1\" value=\"prepaid_envelope\"> \r\n    <label class=\"custom-control-label\" for=\"exampleRadios1\"> I Want a Prepaid Envelope </label>\r\n  </div>\r\n  <div class=\"custom-control custom-radio\">\r\n  <input type=\"radio\" class=\"custom-control-input\"   formControlName=\"donorCompOpts\" id=\"exampleRadios2\" value=\"dropoff_location\">\r\n  <label class=\"custom-control-label\" for=\"exampleRadios2\"> I Want to Dropoff in a location </label>\r\n  </div>\r\n  <div class=\"custom-control custom-radio\">\r\n  <input type=\"radio\" class=\"custom-control-input\"    formControlName=\"donorCompOpts\" id=\"exampleRadios3\" value=\"selfpaid_envelope\"> \r\n  <label class=\"custom-control-label\" for=\"exampleRadios3\"> I will send it in a self paid Envelope </label>\r\n  \r\n  </div>\r\n  <div  class=\"col-md-12  text-center\"><button type=\"submit\"  class=\"btn btn-primary\" [disabled] = \"!donorComp.valid\" >OK</button></div>\r\n</form>\r\n</div>\r\n</div>\r\n</section>\r\n<!--<p>\r\n  Selected value : {{radioSelectedValue}}\r\n</p>\r\nrouterLink=\"../donor\"\r\n-->"

/***/ }),

/***/ "./src/app/donor/donor.component.ts":
/*!******************************************!*\
  !*** ./src/app/donor/donor.component.ts ***!
  \******************************************/
/*! exports provided: DonorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonorComponent", function() { return DonorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var DonorComponent = /** @class */ (function () {
    function DonorComponent(formBuilder, router) {
        this.donorComp = formBuilder.group({
            donorCompOpts: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.router = router;
    }
    //on submit function
    DonorComponent.prototype.onClickSubmit = function (data) {
        this.radioSelectedValue = data.donorCompOpts;
        if (this.radioSelectedValue == 'prepaid_envelope') {
            //alert(this.radioSelectedValue)
            this.router.navigate(['../donor']);
        }
        else if (this.radioSelectedValue == 'dropoff_location') {
            this.router.navigate(['../dropoff']);
        }
        else {
            this.router.navigate(['../selfPaidEnvelope']);
        }
        //navigate to the donor-input screen
    };
    DonorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-donor',
            template: __webpack_require__(/*! ./donor.component.html */ "./src/app/donor/donor.component.html"),
            styles: [__webpack_require__(/*! ./donor.component.css */ "./src/app/donor/donor.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DonorComponent);
    return DonorComponent;
}());



/***/ }),

/***/ "./src/app/dropoff/Dropoff.component.css":
/*!***********************************************!*\
  !*** ./src/app/dropoff/Dropoff.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n    text-align: center;\r\n  \r\n   \r\n  }\r\n\r\n.message{\r\n\r\n  position: absolute;\r\n    top: 50%;\r\n    left: 30%;\r\n    margin-top: -50px;\r\n    margin-left: -50px;\r\n    \r\n}\r\n\r\n.hero {\r\nbackground-color:#e6e6e6;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZHJvcG9mZi9Ecm9wb2ZmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7OztFQUdwQjs7QUFFRjs7RUFFRSxrQkFBa0I7SUFDaEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsa0JBQWtCOztBQUV0Qjs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2Ryb3BvZmYvRHJvcG9mZi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgIFxyXG4gIH1cclxuXHJcbi5tZXNzYWdle1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01MHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5oZXJvIHtcclxuYmFja2dyb3VuZC1jb2xvcjojZTZlNmU2O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/dropoff/Dropoff.component.html":
/*!************************************************!*\
  !*** ./src/app/dropoff/Dropoff.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n</head>\r\n<section class=\"hero is-fullheight-with-navbar\">\r\n    <div class=\"hero-body\">\r\n<div class=\"container\">\r\n    <h4>Dear Donor, kindly dropoff your eyeframes in any one of the following location</h4>\r\n\r\n<!-- </div>\r\n<div class=\"container\"> -->\r\n    <form>\r\n            <input type=\"radio\" name=\"location\" value=\"baabee\" (change)=\" onRadioClick()\"> Baabee Main office<br>\r\n            \r\n            <input type=\"radio\" name=\"location\" value=\"nearby\" (change)=\" onRadioClick()\"> Nearby Location <i class=\"fa fa-map-marker\"></i><br>\r\n        \r\n        </form>\r\n    </div>\r\n    </div>\r\n    </section>\r\n<!-- <div class=\"message\" >\r\n    <h5>Thank you for donating eyeframes to Baabee organization</h5>\r\n</div> -->\r\n<custom-modal id=\"custom-modal-1\">\r\n    <h4>{{modalText}}</h4>\r\n    <div style=\"text-align:center;\">\r\n        <button (click)=\"closeModal('custom-modal-1');\">Close</button>\r\n    </div>\r\n  </custom-modal>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/dropoff/Dropoff.component.ts":
/*!**********************************************!*\
  !*** ./src/app/dropoff/Dropoff.component.ts ***!
  \**********************************************/
/*! exports provided: DropoffComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropoffComponent", function() { return DropoffComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal.service */ "./src/app/modal.service.ts");



var DropoffComponent = /** @class */ (function () {
    function DropoffComponent(modalService) {
        this.modalService = modalService;
    }
    DropoffComponent.prototype.ngOnInit = function () {
    };
    DropoffComponent.prototype.onRadioClick = function () {
        this.modalText = "Thank you for Dononating Eye Frames to IFramex Organisation!";
        this.openModal();
    };
    DropoffComponent.prototype.openModal = function () {
        this.modalService.open('custom-modal-1');
    };
    DropoffComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    DropoffComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dropoff',
            template: __webpack_require__(/*! ./Dropoff.component.html */ "./src/app/dropoff/Dropoff.component.html"),
            styles: [__webpack_require__(/*! ./Dropoff.component.css */ "./src/app/dropoff/Dropoff.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
    ], DropoffComponent);
    return DropoffComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* * {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: Arial;\r\n  height: 100%;\r\n} */\r\n\r\n/* Header/Blog Title */\r\n\r\n/* .header {\r\n  padding: 30px;\r\n  text-align: center;\r\n  background: white;\r\n}\r\n\r\n.header h1 {\r\n  font-size: 50px;\r\n  color : brown;\r\n} */\r\n\r\n/*Fixed Footer for all pages*/\r\n\r\n/* .footer {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  color: grey;\r\n  text-align: center;\r\n} */\r\n\r\n/* Style the top navigation bar */\r\n\r\n/* .topnav {\r\n  overflow: hidden;\r\n  background-color: black;\r\n} */\r\n\r\n/* Style the topnav links */\r\n\r\n/* .topnav a {\r\n  float: left;\r\n  display: block;\r\n  color: #f2f2f2;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n} */\r\n\r\n/* Change color on hover */\r\n\r\n/* .topnav a:hover {\r\n  background-color: #ddd;\r\n  color: black;\r\n} */\r\n\r\n/* Create two unequal columns that floats next to each other */\r\n\r\n/* Left column */\r\n\r\n/* .leftcolumn {   \r\n  float: left;\r\n  width: 75%;\r\n} */\r\n\r\n/* Right column */\r\n\r\n/* .rightcolumn {\r\n  float: left;\r\n  width: 25%;\r\n  background-color: #f1f1f1;\r\n  padding-left: 20px;\r\n} */\r\n\r\n/* Fake image */\r\n\r\n/* .fakeimg {\r\n  background-color: #aaa;\r\n  width: 100%;\r\n  padding: 20px;\r\n} */\r\n\r\n/* Add a card effect for articles */\r\n\r\n/* .card {\r\n  background-color: white;\r\n  padding: 20px;\r\n  margin-top: 20px;\r\n} */\r\n\r\n/* Clear floats after the columns */\r\n\r\n/* .row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n} */\r\n\r\n/* Footer */\r\n\r\n/* .footer {\r\n  padding: 20px;\r\n  text-align: center;\r\n  background: #ddd;\r\n  margin-top: 20px;\r\n} */\r\n\r\n.hero {\r\n  background-image: url('/assets/img/homed.jpg') !important;\r\n  background-size: cover;\r\n  background-position: center center;\r\n  background-color:grey;\r\n  color:darkred;\r\n  font-size: bolder;\r\n  text-align: justify;\r\n}\r\n\r\nh1 {\r\n   -webkit-text-stroke: 1px darkviolet;\r\n  color:red;\r\n  font-size :50px;\r\n  text-shadow:\r\n      3px 3px 0 darkviolet,\r\n    -1px -1px 0 darkviolet,  \r\n     1px -1px 0 darkviolet,\r\n     -1px 1px 0 darkviolet,\r\n      1px 1px 0 darkviolet; \r\n     \r\n}\r\n\r\nh2 {\r\n  -webkit-text-stroke: 1px red;\r\n  color:yellow;\r\n  font-size :40px;\r\n  text-shadow:\r\n  3px 3px 0 red,\r\n-1px -1px 0 red,  \r\n 1px -1px 0 red,\r\n -1px 1px 0 red,\r\n  1px 1px 0 red; \r\n\r\n}\r\n\r\na {\r\n  color: yellow;\r\n}\r\n\r\np,h3 {\r\n  -webkit-text-stroke: 1px red;\r\n  color:yellow;\r\n  text-shadow:\r\n  3px 3px 0 red,\r\n-1px -1px 0 red,  \r\n 1px -1px 0 red,\r\n -1px 1px 0 red,\r\n  1px 1px 0 red; \r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRzs7QUFFSCxzQkFBc0I7O0FBQ3RCOzs7Ozs7Ozs7R0FTRzs7QUFDSCw2QkFBNkI7O0FBQzdCOzs7Ozs7O0dBT0c7O0FBRUgsaUNBQWlDOztBQUNqQzs7O0dBR0c7O0FBRUgsMkJBQTJCOztBQUMzQjs7Ozs7OztHQU9HOztBQUVILDBCQUEwQjs7QUFDMUI7OztHQUdHOztBQUVILDhEQUE4RDs7QUFDOUQsZ0JBQWdCOztBQUNoQjs7O0dBR0c7O0FBRUgsaUJBQWlCOztBQUNqQjs7Ozs7R0FLRzs7QUFFSCxlQUFlOztBQUNmOzs7O0dBSUc7O0FBRUgsbUNBQW1DOztBQUNuQzs7OztHQUlHOztBQUVILG1DQUFtQzs7QUFDbkM7Ozs7R0FJRzs7QUFFSCxXQUFXOztBQUNYOzs7OztHQUtHOztBQUVIO0VBQ0UseURBQXlEO0VBQ3pELHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUNBO0dBQ0csbUNBQW1DO0VBQ3BDLFNBQVM7RUFDVCxlQUFlO0VBQ2Y7Ozs7OzBCQUt3Qjs7QUFFMUI7O0FBQ0E7RUFDRSw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGVBQWU7RUFDZjs7Ozs7ZUFLYTs7QUFFZjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQztFQUNDLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1o7Ozs7O2VBS2E7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gIGhlaWdodDogMTAwJTtcclxufSAqL1xyXG5cclxuLyogSGVhZGVyL0Jsb2cgVGl0bGUgKi9cclxuLyogLmhlYWRlciB7XHJcbiAgcGFkZGluZzogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkZXIgaDEge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBjb2xvciA6IGJyb3duO1xyXG59ICovXHJcbi8qRml4ZWQgRm9vdGVyIGZvciBhbGwgcGFnZXMqL1xyXG4vKiAuZm9vdGVyIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59ICovXHJcblxyXG4vKiBTdHlsZSB0aGUgdG9wIG5hdmlnYXRpb24gYmFyICovXHJcbi8qIC50b3BuYXYge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn0gKi9cclxuXHJcbi8qIFN0eWxlIHRoZSB0b3BuYXYgbGlua3MgKi9cclxuLyogLnRvcG5hdiBhIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBjb2xvcjogI2YyZjJmMjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTRweCAxNnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSAqL1xyXG5cclxuLyogQ2hhbmdlIGNvbG9yIG9uIGhvdmVyICovXHJcbi8qIC50b3BuYXYgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn0gKi9cclxuXHJcbi8qIENyZWF0ZSB0d28gdW5lcXVhbCBjb2x1bW5zIHRoYXQgZmxvYXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG4vKiBMZWZ0IGNvbHVtbiAqL1xyXG4vKiAubGVmdGNvbHVtbiB7ICAgXHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDc1JTtcclxufSAqL1xyXG5cclxuLyogUmlnaHQgY29sdW1uICovXHJcbi8qIC5yaWdodGNvbHVtbiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxufSAqL1xyXG5cclxuLyogRmFrZSBpbWFnZSAqL1xyXG4vKiAuZmFrZWltZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59ICovXHJcblxyXG4vKiBBZGQgYSBjYXJkIGVmZmVjdCBmb3IgYXJ0aWNsZXMgKi9cclxuLyogLmNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufSAqL1xyXG5cclxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXHJcbi8qIC5yb3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn0gKi9cclxuXHJcbi8qIEZvb3RlciAqL1xyXG4vKiAuZm9vdGVyIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjZGRkO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn0gKi9cclxuXHJcbi5oZXJvIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1nL2hvbWVkLmpwZycpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6Z3JleTtcclxuICBjb2xvcjpkYXJrcmVkO1xyXG4gIGZvbnQtc2l6ZTogYm9sZGVyO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuaDEge1xyXG4gICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggZGFya3Zpb2xldDtcclxuICBjb2xvcjpyZWQ7XHJcbiAgZm9udC1zaXplIDo1MHB4O1xyXG4gIHRleHQtc2hhZG93OlxyXG4gICAgICAzcHggM3B4IDAgZGFya3Zpb2xldCxcclxuICAgIC0xcHggLTFweCAwIGRhcmt2aW9sZXQsICBcclxuICAgICAxcHggLTFweCAwIGRhcmt2aW9sZXQsXHJcbiAgICAgLTFweCAxcHggMCBkYXJrdmlvbGV0LFxyXG4gICAgICAxcHggMXB4IDAgZGFya3Zpb2xldDsgXHJcbiAgICAgXHJcbn1cclxuaDIge1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCByZWQ7XHJcbiAgY29sb3I6eWVsbG93O1xyXG4gIGZvbnQtc2l6ZSA6NDBweDtcclxuICB0ZXh0LXNoYWRvdzpcclxuICAzcHggM3B4IDAgcmVkLFxyXG4tMXB4IC0xcHggMCByZWQsICBcclxuIDFweCAtMXB4IDAgcmVkLFxyXG4gLTFweCAxcHggMCByZWQsXHJcbiAgMXB4IDFweCAwIHJlZDsgXHJcblxyXG59XHJcbmEge1xyXG4gIGNvbG9yOiB5ZWxsb3c7XHJcbn1cclxuXHJcbiBwLGgzIHtcclxuICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggcmVkO1xyXG4gIGNvbG9yOnllbGxvdztcclxuICB0ZXh0LXNoYWRvdzpcclxuICAzcHggM3B4IDAgcmVkLFxyXG4tMXB4IC0xcHggMCByZWQsICBcclxuIDFweCAtMXB4IDAgcmVkLFxyXG4gLTFweCAxcHggMCByZWQsXHJcbiAgMXB4IDFweCAwIHJlZDsgXHJcbiB9Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <head>\r\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.7.0/css/all.css\"\r\n    integrity=\"sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ\" crossorigin=\"anonymous\">\r\n</head>\r\n\r\n<body>\r\n  <div class=\"header\">\r\n        <img src=\"/assets/img/iframex.jpg\" width=\"15%\">\r\n  </div>\r\n\r\n  <div class=\"topnav\">\r\n      <img src=\"/assets/img/iframex.jpg\" width=\"5%\" align=\"left\">\r\n    <a> <i class=\"fas fa-bars\"></i></a>\r\n    <a routerLink=\"../donor-opts\">DONATE FRAMES</a>\r\n    <a routerLink=\"../beneficiary\">NEED FRAMES</a>\r\n    <a routerLink=\"../admin\">ADMIN LOGIN</a>\r\n  </div>\r\n</body> -->\r\n\r\n<section class=\"hero is-info is-fullheight is-bold\">\r\n    <div class=\"hero-body\">\r\n    <div class=\"container\">\r\n      <!-- <img src=\"assets/img/iframex.jpg\">  -->\r\n \r\n      <h1>Iframe-X is an Eyeglass frames donation management Software</h1>\r\n      <br><br>\r\n      <h2>Wondering what to do with your used Eyeglass frames? <br> Don't throw them away!</h2>\r\n      <br>\r\n      <div class=\"container\" [class.show]=\"show\"> \r\n      <h3>Iframe-X aids automating the collection of used Eyeglass frame donations, \r\n        distributing them to the people who can't effort to buy.\r\n        <p *ngIf=\"show\">\r\n        NGO's/Admins operation is hastle free now. Our Software manages to get the \r\n        matching frames based on beneficiary requirement which helps NGO/Admin to make faster and better decision on distributing the \r\n        eyeglass frames to the people who can't afford it. <br>\r\n        Donor can donate used Eyeglass frames smoothly and efficiently. They can opt for pre-enveloped, drop off or seld paid pre-envelope\r\n        as per thier comfort. <br>\r\n        Beneficiery who can't afford to have Eyeglass frame  can freely provode thier requirement an recieve well conditioned frame inshort span of time.\r\n      </p>\r\n      </h3>\r\n    \r\n      <button (click)=\"show = !show\">{{ show ? 'Show less': 'Show More' }}</button>\r\n    </div>\r\n    </div>\r\n    </div>\r\n    </section>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    // public buttonName:any = 'Read more..';
    function HomeComponent() {
        //public show:boolean = false;
        this.show = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/match-frame-service/frame-service.ts":
/*!******************************************************!*\
  !*** ./src/app/match-frame-service/frame-service.ts ***!
  \******************************************************/
/*! exports provided: FrameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameService", function() { return FrameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var FrameService = /** @class */ (function () {
    function FrameService(http) {
        this.http = http;
        this.frameUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + 'frames';
        this.matchFrameUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + 'frame/matchframe';
        this.frameRequestUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + 'frameRequests';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    FrameService.prototype.findAll = function () {
        return this.http.get(this.frameUrl, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) });
    };
    ;
    FrameService.prototype.updateStatus = function (requestBody) {
        // updating the frame status
        // console.log("this.frameUrl+'/'+requestBody.frame.id"+this.frameUrl+'/'+requestBody.frame.id);
        //      this.http.patch<Frame>(this.frameUrl+'/'+requestBody.frame.id, {"status":"FRAME_MATCHED"}, this.httpOptions)
        //         .subscribe((res)=>{
        //             console.log(res);
        //         });;
        // updating the frameRequest status
        return this.http.patch(this.frameRequestUrl + '/' + requestBody.id, requestBody, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ;
    // POST /donorRequest Rest API
    FrameService.prototype.matchFrameRequest = function (frameRequest) {
        return this.http.post(this.matchFrameUrl, frameRequest, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    FrameService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
            if (error.status == 0) {
                errorMessage = "Please try again after sometimes. Check the Http Response";
            }
            else {
                // Get server-side error
                errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
            }
        }
        window.alert(errorMessage);
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    };
    ;
    FrameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FrameService);
    return FrameService;
}());



/***/ }),

/***/ "./src/app/match-frame-service/match-frame-service.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/match-frame-service/match-frame-service.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGNoLWZyYW1lLXNlcnZpY2UvbWF0Y2gtZnJhbWUtc2VydmljZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/match-frame-service/match-frame-service.component.html":
/*!************************************************************************!*\
  !*** ./src/app/match-frame-service/match-frame-service.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \r\n <div style=\"padding-top: 10px;padding-left: 870px;\">\r\n  <button  type=\"button\" (click)=\"markAsMatched()\" class=\"btn btn-outline-info\">Mark it as Matched</button>\r\n</div>\r\n <div style=\"height: 100%; padding-top: 10px; box-sizing: border-box;\">\r\n  <ag-grid-angular\r\n    #agGrid\r\n    style=\"width: 1000px; height: 600px;\"\r\n    id=\"myGrid\"\r\n    class=\"ag-theme-balham\"\r\n    [columnDefs]=\"columnDefs\"\r\n    [defaultColDef]=\"defaultColDef\"\r\n    [enableSorting]=\"true\"\r\n    [enableFilter]=\"true\"\r\n    [pagination]=\"true\"\r\n    (gridReady)=\"onGridReady($event)\"\r\n    [rowSelection]=\"rowSelection\"\r\n    [rowData]=\"rowData\"\r\n  ></ag-grid-angular>\r\n</div>  \r\n\r\n<!-- name: {{name}} -->\r\n\r\n"

/***/ }),

/***/ "./src/app/match-frame-service/match-frame-service.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/match-frame-service/match-frame-service.component.ts ***!
  \**********************************************************************/
/*! exports provided: MatchFrameServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchFrameServiceComponent", function() { return MatchFrameServiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _frame_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./frame-service */ "./src/app/match-frame-service/frame-service.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");





var MatchFrameServiceComponent = /** @class */ (function () {
    function MatchFrameServiceComponent(router, logger, activatedRoute, frameService) {
        this.router = router;
        this.logger = logger;
        this.activatedRoute = activatedRoute;
        this.frameService = frameService;
        this.columnDefs = this.createColumnDefs();
        this.rowSelection = "single";
        //   const navigation = this.router.getCurrentNavigation();
        //  const state = navigation.extras.state as {example: string};
        //  console.log("In Component" +state.example);
        // this.example = state.example;
        this.state = this.router.getCurrentNavigation().extras.state;
        //     this.state$ = this.router.events.pipe(
        //   filter(e => e instanceof NavigationStart),
        //   map(() => {
        //     const currentNav = this.router.getCurrentNavigation();
        //     return currentNav.extras.state;
        //   })
        // );
    }
    MatchFrameServiceComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("Im nu" + JSON.stringify(this.state));
        this.frameService.matchFrameRequest(this.state).subscribe(function (Frame) {
            _this.rowData = Frame;
            _this.logger.debug("Frame  recieved" + JSON.stringify(_this.rowData));
        }, function (error) {
            _this.logger.debug("Error recieved" + JSON.stringify(error));
        });
        // console.log("histoetyy" +history.state.data);
        //  this.state$ = this.router.events.pipe(
        //   filter(e => e instanceof NavigationStart),
        //   map(() => {
        //     const currentNav = this.router.getCurrentNavigation();
        //     return currentNav.extras.state;
        //   })
        // );
        // console.log("statee" +this.state$);
        //this.state$ = this.activatedRoute.paramMap
        //.pipe(map(() => window.history.state))
        //console.log("histoetyy" + JSON.stringify(this.state$));
        // this.frameService.findAll().subscribe(
        //   Frame => {
        //     this.rowData = Frame
        //   },
        //   error => {
        //     console.log(error);
        //   }
        // )
    };
    MatchFrameServiceComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
    };
    /*
  Invokes the Patch Donor Request Rest API
  */
    MatchFrameServiceComponent.prototype.markAsMatched = function () {
        var selectedRows = this.gridApi.getSelectedRows();
        this.logger.debug("Selected rows" + JSON.stringify(selectedRows));
        this.logger.debug("State is" + JSON.stringify(this.state.id));
        // Invoking Patch rest API,
        // Updating the status as "DON_REQ_PREPAID_SENT"
        var logger = this.logger;
        var donRequest = this.frameService;
        var gridApi = this.gridApi;
        var id = this.state.id;
        var pageRouter = this.router;
        selectedRows.forEach(function (selectedRow, index) {
            logger.debug("selected Id" + selectedRow.id);
            output: JSON;
            var updateReq = {};
            updateReq.id = id;
            updateReq.status = "FRAME_REQ_MATCHED";
            updateReq.frame = selectedRow;
            updateReq.frame.status = "FRAME_MATCHED";
            //   "id": id,;
            //   "status":"FRAME_REQ_MATCHED",
            //   frame: selectedRow
            // };
            //  this.output = <JSON>this.obj;
            var observer = donRequest.updateStatus(updateReq);
            observer.subscribe(function (data) {
                //   //selected rows  will be removed from grid
                //   // var itemsToUpdate = [{"status":"DON_REQ_PREPAID_SENT"}];
                //   //  gridApi.updateRowData({ update: itemsToUpdate });
                var status = data["status"];
                logger.debug("Status" + status);
                logger.debug("Response  recieved" + JSON.stringify(data));
                pageRouter.navigate(['../processFrame']);
            }, function (error) {
                logger.debug("Error recieved" + JSON.stringify(error));
            });
        });
    };
    MatchFrameServiceComponent.prototype.createColumnDefs = function () {
        return [
            { headerName: 'Frame Id', field: 'id', checkboxSelection: true },
            { headerName: 'Gender', field: 'gender' },
            { headerName: 'Size', field: 'size' },
            { headerName: 'Color', field: 'color' },
            { headerName: 'Material', field: 'material' }
        ];
    };
    MatchFrameServiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-match-frame-service',
            template: __webpack_require__(/*! ./match-frame-service.component.html */ "./src/app/match-frame-service/match-frame-service.component.html"),
            providers: [_frame_service__WEBPACK_IMPORTED_MODULE_3__["FrameService"]],
            styles: [__webpack_require__(/*! ./match-frame-service.component.css */ "./src/app/match-frame-service/match-frame-service.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_logger__WEBPACK_IMPORTED_MODULE_4__["NGXLogger"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _frame_service__WEBPACK_IMPORTED_MODULE_3__["FrameService"]])
    ], MatchFrameServiceComponent);
    return MatchFrameServiceComponent;
}());



/***/ }),

/***/ "./src/app/match-frame/match-frame.component.css":
/*!*******************************************************!*\
  !*** ./src/app/match-frame/match-frame.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGNoLWZyYW1lL21hdGNoLWZyYW1lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/match-frame/match-frame.component.html":
/*!********************************************************!*\
  !*** ./src/app/match-frame/match-frame.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav><button  type=\"button\" routerLink=\"../matchFrame\" [state]=\"{hello:'world'}\">Match Frame</button>  </nav> -->\r\n<!-- <nav>\r\n    <a routerLink=\"../matchFrame\" (click)=\"test()\">Match Frame</a>\r\n  </nav> -->\r\n\r\n  <button type=\"button\" (click)=\"navigate()\">Click to Match Frame</button>"

/***/ }),

/***/ "./src/app/match-frame/match-frame.component.ts":
/*!******************************************************!*\
  !*** ./src/app/match-frame/match-frame.component.ts ***!
  \******************************************************/
/*! exports provided: MatchFrameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchFrameComponent", function() { return MatchFrameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MatchFrameComponent = /** @class */ (function () {
    function MatchFrameComponent(router) {
        this.router = router;
    }
    MatchFrameComponent.prototype.refresh = function () {
        return false;
    };
    MatchFrameComponent.prototype.agInit = function (params) {
        console.log("Params****" + params);
        this.params = params;
    };
    // public invokeParentMethod() {
    //   console.log("Rowww" +JSON.stringify(this.params.data));
    //   this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
    // }
    // test(){
    //  const navigationExtras: NavigationExtras = {state: {hello: 'This is an example1'}};
    //     this.router.navigate(['../matchFrame'], navigationExtras);
    // }
    MatchFrameComponent.prototype.navigate = function () {
        // this.router.navigate(['other']);
        console.log("Rowww" + JSON.stringify(this.params.data));
        this.router.navigate(['../matchFrame'], { skipLocationChange: true, state: this.params.data });
    };
    MatchFrameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-match-frame',
            template: __webpack_require__(/*! ./match-frame.component.html */ "./src/app/match-frame/match-frame.component.html"),
            styles: [__webpack_require__(/*! ./match-frame.component.css */ "./src/app/match-frame/match-frame.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MatchFrameComponent);
    return MatchFrameComponent;
}());



/***/ }),

/***/ "./src/app/modal.component.ts":
/*!************************************!*\
  !*** ./src/app/modal.component.ts ***!
  \************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.service */ "./src/app/modal.service.ts");



var ModalComponent = /** @class */ (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', function (e) {
            if (e.target.className === 'custom-modal') {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        this.element.style.display = 'block';
        document.body.classList.add('custom-modal-open');
    };
    // close modal
    ModalComponent.prototype.close = function () {
        this.element.style.display = 'none';
        document.body.classList.remove('custom-modal-open');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'custom-modal',
            template: "<div class=\"custom-modal\">\n            <div class=\"custom-modal-body\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n        <div class=\"custom-modal-background\"></div>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/modal.service.ts":
/*!**********************************!*\
  !*** ./src/app/modal.service.ts ***!
  \**********************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
var ModalService = /** @class */ (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    return ModalService;
}());



/***/ }),

/***/ "./src/app/process-donation/process-donation.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/process-donation/process-donation.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2Vzcy1kb25hdGlvbi9wcm9jZXNzLWRvbmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wcm9jZXNzLWRvbmF0aW9uL3Byb2Nlc3MtZG9uYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/process-donation/process-donation.component.html":
/*!******************************************************************!*\
  !*** ./src/app/process-donation/process-donation.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n <div class =\"donate\">\r\n<div  style=\"margin-bottom: 5px; margin-top: 5px; margin-right: 10px;text-align: right;\">\r\n  <button  type=\"button\" (click)=\"markAsProcessed()\" class=\"btn btn-outline-info\">Mark it as Processed</button>\r\n</div>\r\n<div>\r\n  <ag-grid-angular\r\n    #agGrid\r\n    id=\"myGrid\"\r\n    class=\"ag-theme-balham\"\r\n    [columnDefs]=\"columnDefs\"\r\n    [defaultColDef]=\"defaultColDef\"\r\n    [enableSorting]=\"true\"\r\n    [enableFilter]=\"true\"\r\n    [pagination]=\"true\"\r\n    [enableCellTextSelection]=\"true\"\r\n    [rowSelection]=\"rowSelection\"\r\n    [getRowHeight]=\"getRowHeight\"\r\n    [domLayout]=\"domLayout\"\r\n    (gridReady)=\"onGridReady($event)\"\r\n    [rowData]=\"rowData\"\r\n  ></ag-grid-angular>\r\n</div>\r\n </div>\r\n"

/***/ }),

/***/ "./src/app/process-donation/process-donation.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/process-donation/process-donation.component.ts ***!
  \****************************************************************/
/*! exports provided: ProcessDonationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessDonationComponent", function() { return ProcessDonationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _process_frame_request_frame_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../process-frame-request/frame-request-service */ "./src/app/process-frame-request/frame-request-service.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");




var ProcessDonationComponent = /** @class */ (function () {
    function ProcessDonationComponent(frameRequests, logger) {
        this.frameRequests = frameRequests;
        this.logger = logger;
        this.columnDefs = this.createColumnDefs();
        this.rowSelection = "single";
        this.domLayout = "autoHeight";
        this.getRowHeight = function (params) {
            var address = params.data.beneficary_address;
            var length = address.length;
            return 28 * (Math.floor(length / 60) + 1);
        };
    }
    ProcessDonationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.frameRequests.findbyStatus().subscribe(function (FrameRequest) {
            _this.rowData = FrameRequest;
        }, function (error) {
            _this.logger.debug("Error recieved" + JSON.stringify(error));
        });
    };
    /*
  Invokes the Patch Donor Request Rest API
  */
    ProcessDonationComponent.prototype.markAsProcessed = function () {
        var selectedRows = this.gridApi.getSelectedRows();
        this.logger.debug("Selected rows" + selectedRows);
        // Invoking Patch rest API,
        // Updating the status as "DON_REQ_PREPAID_SENT"
        var logger = this.logger;
        var frameRequest = this.frameRequests;
        var gridApi = this.gridApi;
        selectedRows.forEach(function (selectedRow, index) {
            logger.debug("selected Id" + selectedRow.id);
            var observer = frameRequest.updateStatus(selectedRow.id);
            observer.subscribe(function (data) {
                //selected rows  will be removed from grid
                // var itemsToUpdate = [{"status":"DON_REQ_PREPAID_SENT"}];
                gridApi.updateRowData({ remove: selectedRows });
                var status = data["status"];
                logger.debug("Status" + status);
                logger.debug("Response  recieved" + JSON.stringify(data));
            }, function (error) {
                logger.debug("Error recieved" + JSON.stringify(error));
            });
        });
    };
    ProcessDonationComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        // this.getRowHeight = function (params) {
        //   // assuming 50 characters per line, working how how many lines we need
        //   return 18 * (Math.floor(params.data.name.length / 45) + 1);
        this.gridApi.sizeColumnsToFit();
    };
    ProcessDonationComponent.prototype.createColumnDefs = function () {
        return [
            { field: 'beneficiaryRequest_id', headerName: 'Beneficiary ID', resizable: false, checkboxSelection: true },
            { field: 'beneficiary_name', headerName: 'Beneficiary Name', resizable: false },
            { field: 'beneficary_address', resizable: true, cellStyle: { "white-space": "normal" }, headerName: 'Beneficiary Address' },
            {
                field: 'size', headerName: 'Frame Request Information', resizable: true, cellStyle: { "white-space": "normal" }, valueGetter: function (params) {
                    var size = params.data.size ? "Size:" + params.data.size : '';
                    var color = params.data.color ? "Color:" + params.data.color : '';
                    var material = params.data.material ? "Material:" + params.data.material : '';
                    var gender = params.data.gender ? "Gender:" + params.data.gender : '';
                    return size + " " + gender + " " + color + " " + material;
                }
            },
            {
                field: 'color', headerName: 'Matched Frame Information', resizable: true, cellStyle: { "white-space": "normal" }, valueGetter: function (params) {
                    if (params.data.frame) {
                        var frame = params.data.frame;
                        var fId = frame.id ? "Frame Id:" + frame.id : '';
                        var fName = frame.name ? "Frame Name:" + frame.name : '';
                        var fSize = frame.size ? "Size:" + frame.size : '';
                        var fColor = frame.color ? "Color:" + frame.color : '';
                        var fMaterial = frame.material ? "Material:" + frame.material : '';
                        var fGender = frame.gender ? "Gender:" + frame.gender : '';
                        return fName + " " + fId + " " + fSize + " " + fGender + " " + fColor + " " + fMaterial;
                    }
                }
            }
        ];
    };
    ProcessDonationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-process-donation',
            template: __webpack_require__(/*! ./process-donation.component.html */ "./src/app/process-donation/process-donation.component.html"),
            providers: [_process_frame_request_frame_request_service__WEBPACK_IMPORTED_MODULE_2__["FrameRequestService"]],
            styles: [__webpack_require__(/*! ./process-donation.component.css */ "./src/app/process-donation/process-donation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_process_frame_request_frame_request_service__WEBPACK_IMPORTED_MODULE_2__["FrameRequestService"], ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NGXLogger"]])
    ], ProcessDonationComponent);
    return ProcessDonationComponent;
}());



/***/ }),

/***/ "./src/app/process-donor-envelope/process-donor-envelope.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/process-donor-envelope/process-donor-envelope.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvY2Vzcy1kb25vci1lbnZlbG9wZS9wcm9jZXNzLWRvbm9yLWVudmVsb3BlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wcm9jZXNzLWRvbm9yLWVudmVsb3BlL3Byb2Nlc3MtZG9ub3ItZW52ZWxvcGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/process-donor-envelope/process-donor-envelope.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/process-donor-envelope/process-donor-envelope.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-bottom: 5px; margin-top: 5px; margin-right: 10px;text-align: right;\">\r\n  <button  type=\"button\" (click)=\"markAsSent()\" class=\"btn btn-outline-info\">Mark it as Sent</button>\r\n</div>\r\n<div>\r\n  <ag-grid-angular\r\n    #agGrid\r\n    id=\"myGrid\"\r\n    class=\"ag-theme-balham\"\r\n    [columnDefs]=\"columnDefs\"\r\n    [defaultColDef]=\"defaultColDef\"\r\n    [enableSorting]=\"true\"\r\n    [enableFilter]=\"true\"\r\n    [pagination]=\"true\"\r\n    [enableCellTextSelection]=\"true\"\r\n    [rowSelection]=\"rowSelection\"\r\n    [getRowHeight]=\"getRowHeight\"\r\n    [getRowNodeId]=\"getRowNodeId\"\r\n    [domLayout]=\"domLayout\"\r\n    (gridReady)=\"onGridReady($event)\"\r\n    [rowData]=\"rowData\"\r\n  ></ag-grid-angular>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/process-donor-envelope/process-donor-envelope.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/process-donor-envelope/process-donor-envelope.component.ts ***!
  \****************************************************************************/
/*! exports provided: ProcessDonorEnvelopeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessDonorEnvelopeComponent", function() { return ProcessDonorEnvelopeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _donor_input_donor_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../donor-input/donor-request-service */ "./src/app/donor-input/donor-request-service.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");




var ProcessDonorEnvelopeComponent = /** @class */ (function () {
    function ProcessDonorEnvelopeComponent(donRequest, logger) {
        this.donRequest = donRequest;
        this.logger = logger;
        this.columnDefs = this.createColumnDefs();
        this.rowSelection = "single";
        this.domLayout = "autoHeight";
        this.getRowHeight = function (params) {
            var address = params.data.user.address;
            var length = address.addressLine1.length + address.addressLine2.length + address.city.length + address.state.length + address.zipcode.length + address.country.length;
            return 28 * (Math.floor(length / 60) + 1);
        };
        this.getRowNodeId = function (data) {
            return data.id;
        };
    }
    ProcessDonorEnvelopeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.donRequest.findByStatus().subscribe(function (DonorRequest) {
            _this.rowData = DonorRequest;
        }, function (error) {
            _this.logger.debug("Error recieved" + JSON.stringify(error));
        });
    };
    /*
    Invokes the Patch Donor Request Rest API
    */
    ProcessDonorEnvelopeComponent.prototype.markAsSent = function () {
        var selectedRows = this.gridApi.getSelectedRows();
        this.logger.debug("Selected rows" + selectedRows);
        // Invoking Patch rest API,
        // Updating the status as "DON_REQ_PREPAID_SENT"
        var logger = this.logger;
        var donRequest = this.donRequest;
        var gridApi = this.gridApi;
        selectedRows.forEach(function (selectedRow, index) {
            logger.debug("selected Id" + selectedRow.id);
            var observer = donRequest.updateStatus(selectedRow.id);
            observer.subscribe(function (data) {
                // updating the status instatntly
                var rowNode = gridApi.getRowNode(selectedRow.id);
                rowNode.setDataValue("status", "DON_REQ_PREPAID_SENT");
                //selected rows  will be removed from grid
                // var itemsToUpdate = [{"status":"DON_REQ_PREPAID_SENT"}];
                //  gridApi.updateRowData({ update: itemsToUpdate });
                var status = data["status"];
                logger.debug("Status" + status);
                logger.debug("Response  recieved" + JSON.stringify(data));
            }, function (error) {
                logger.debug("Error recieved" + JSON.stringify(error));
            });
        });
    };
    ProcessDonorEnvelopeComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
    };
    ProcessDonorEnvelopeComponent.prototype.createColumnDefs = function () {
        return [
            { field: 'id', headerName: 'Donor Request ID', resizable: false, checkboxSelection: true },
            { field: 'status', headerName: 'Status', resizable: false },
            {
                field: 'name', headerName: 'Name', resizable: false, valueGetter: function (params) {
                    if (!params.data.user)
                        return '';
                    return params.data.user.name;
                }
            },
            {
                field: 'addressLine1', headerName: 'Address', resizable: true, cellStyle: { "white-space": "normal" }, valueGetter: function (params) {
                    if (params.data.user && params.data.user.address) {
                        var addr = params.data.user.address;
                        var addressLine1 = addr.addressLine1 ? addr.addressLine1 : '';
                        var addressLine2 = addr.addressLine2 ? addr.addressLine2 : '';
                        var city = addr.city ? addr.city : '';
                        var state = addr.state ? addr.state : '';
                        var country = addr.country ? addr.country : '';
                        var zipcode = addr.zipcode ? addr.zipcode : '';
                        return addressLine1 + "\n" + addressLine2 + "\n" + city + "\n" + state + "\n" + country + "\n" + zipcode;
                    }
                }
            }
        ];
    };
    ProcessDonorEnvelopeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-process-donor-envelope',
            template: __webpack_require__(/*! ./process-donor-envelope.component.html */ "./src/app/process-donor-envelope/process-donor-envelope.component.html"),
            providers: [_donor_input_donor_request_service__WEBPACK_IMPORTED_MODULE_2__["DonRequestService"]],
            styles: [__webpack_require__(/*! ./process-donor-envelope.component.css */ "./src/app/process-donor-envelope/process-donor-envelope.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_donor_input_donor_request_service__WEBPACK_IMPORTED_MODULE_2__["DonRequestService"], ngx_logger__WEBPACK_IMPORTED_MODULE_3__["NGXLogger"]])
    ], ProcessDonorEnvelopeComponent);
    return ProcessDonorEnvelopeComponent;
}());



/***/ }),

/***/ "./src/app/process-frame-request/frame-request-service.ts":
/*!****************************************************************!*\
  !*** ./src/app/process-frame-request/frame-request-service.ts ***!
  \****************************************************************/
/*! exports provided: FrameRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameRequestService", function() { return FrameRequestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var FrameRequestService = /** @class */ (function () {
    function FrameRequestService(http) {
        this.http = http;
        this.frameRequestUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + 'frameRequests/search?status=FRAME_REQ_INITAITED';
        this.processedFrameUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + 'frameRequests/search?status=FRAME_REQ_MATCHED';
        this.fRequestUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl + 'frameRequests';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    FrameRequestService.prototype.findAll = function () {
        return this.http.get(this.frameRequestUrl, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ;
    FrameRequestService.prototype.findbyStatus = function () {
        return this.http.get(this.processedFrameUrl, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    ;
    FrameRequestService.prototype.updateStatus = function (id) {
        return this.http.patch(this.fRequestUrl + '/' + id, { "status": "FRAME_REQ_PROCESSED" }, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError));
    };
    FrameRequestService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
            if (error.status == 0) {
                errorMessage = "Please try again after sometimes. Check the Http Response";
            }
            else {
                // Get server-side error
                errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
            }
        }
        window.alert(errorMessage);
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    };
    ;
    FrameRequestService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FrameRequestService);
    return FrameRequestService;
}());



/***/ }),

/***/ "./src/app/process-frame-request/process-frame-request.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/process-frame-request/process-frame-request.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Nlc3MtZnJhbWUtcmVxdWVzdC9wcm9jZXNzLWZyYW1lLXJlcXVlc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/process-frame-request/process-frame-request.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/process-frame-request/process-frame-request.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <ag-grid-angular\r\n  style=\"boxSizing: border-box\"\r\n    #agGrid\r\n    id=\"myGrid\"\r\n    class=\"ag-theme-balham\"\r\n    [columnDefs]=\"columnDefs\"\r\n    [defaultColDef]=\"defaultColDef\"\r\n    [enableSorting]=\"true\"\r\n    [enableFilter]=\"true\"\r\n    [pagination]=\"true\"\r\n    [suppressRowClickSelection]=\"true\"\r\n    [rowSelection]=\"rowSelection\"\r\n    (selectionChanged)=\"onSelectionChanged($event)\"\r\n    (gridReady)=\"onGridReady($event)\"\r\n    [domLayout]=\"domLayout\"\r\n    [rowData]=\"rowData\"\r\n    [frameworkComponents]=\"frameworkComponents\"\r\n  ></ag-grid-angular>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/process-frame-request/process-frame-request.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/process-frame-request/process-frame-request.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProcessFrameRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessFrameRequestComponent", function() { return ProcessFrameRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _frame_request_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./frame-request-service */ "./src/app/process-frame-request/frame-request-service.ts");
/* harmony import */ var _match_frame_match_frame_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../match-frame/match-frame.component */ "./src/app/match-frame/match-frame.component.ts");




var ProcessFrameRequestComponent = /** @class */ (function () {
    function ProcessFrameRequestComponent(frameRequest) {
        this.frameRequest = frameRequest;
        this.columnDefs = this.createColumnDefs();
        this.frameworkComponents = {
            matchframeComponent: _match_frame_match_frame_component__WEBPACK_IMPORTED_MODULE_3__["MatchFrameComponent"]
        };
        this.domLayout = "autoHeight";
    }
    ProcessFrameRequestComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("ngOnInit");
        this.frameRequest.findAll().subscribe(function (FrameRequest) {
            console.log("inside frameRequest" + FrameRequest);
            _this.rowData = FrameRequest;
        }, function (error) {
            console.log(error);
        });
    };
    ProcessFrameRequestComponent.prototype.onGridReady = function (params) {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.gridApi.sizeColumnsToFit();
    };
    ProcessFrameRequestComponent.prototype.createColumnDefs = function () {
        return [
            { headerName: 'Frame Request Id', field: 'id' },
            { headerName: 'Gender', field: 'gender' },
            { headerName: 'Size', field: 'size' },
            { headerName: 'Color', field: 'color' },
            { headerName: 'Material', field: 'material' },
            { headerName: 'Action', field: "value",
                autoHeight: true, cellRenderer: "matchframeComponent", colId: "params" }
        ];
    };
    ProcessFrameRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-process-frame-request',
            template: __webpack_require__(/*! ./process-frame-request.component.html */ "./src/app/process-frame-request/process-frame-request.component.html"),
            providers: [_frame_request_service__WEBPACK_IMPORTED_MODULE_2__["FrameRequestService"]],
            styles: [__webpack_require__(/*! ./process-frame-request.component.css */ "./src/app/process-frame-request/process-frame-request.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_frame_request_service__WEBPACK_IMPORTED_MODULE_2__["FrameRequestService"]])
    ], ProcessFrameRequestComponent);
    return ProcessFrameRequestComponent;
}());



/***/ }),

/***/ "./src/app/recieve-validate-frame/ReceiveAndValidate-service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/recieve-validate-frame/ReceiveAndValidate-service.ts ***!
  \**********************************************************************/
/*! exports provided: ReceiveAndValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiveAndValidateService", function() { return ReceiveAndValidateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");







var ReceiveAndValidateService = /** @class */ (function () {
    function ReceiveAndValidateService(http, logger) {
        this.http = http;
        this.logger = logger;
        this.userRequestUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].baseUrl + 'frame/frames-bulk';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // POST Bulk frames API
    ReceiveAndValidateService.prototype.validateRequest = function (valRequest) {
        return this.http.post(this.userRequestUrl, valRequest, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    ReceiveAndValidateService.prototype.handleError = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
            if (error.status == 0) {
                errorMessage = "Please try again after sometimes. Check the Http Response";
            }
            else {
                // Get server-side error
                errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
            }
        }
        window.alert(errorMessage);
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    };
    ;
    ReceiveAndValidateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_logger__WEBPACK_IMPORTED_MODULE_6__["NGXLogger"]])
    ], ReceiveAndValidateService);
    return ReceiveAndValidateService;
}());



/***/ }),

/***/ "./src/app/recieve-validate-frame/ReceiveAndValidate.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/recieve-validate-frame/ReceiveAndValidate.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  #table-scroll {\r\n    overflow:auto;  \r\n    margin-top:20px;\r\n  }  \r\n  .div {\r\n    background-color: lightblue;\r\n    width: 110px;\r\n    height: 110px;\r\n    overflow: auto;\r\n  }  \r\n  .block {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n  }  \r\n  .outer{display:inline-block;}  \r\n  .one {width:80px; height:80px;}  \r\n  .two {width:80px; height:80px;}  \r\n  .three {width:80px; height:100px;}  \r\n  .form-group.required .control-label:after {\r\n  content:\"*\";\r\n  color:red;\r\n}  \r\n  .hero  {\r\nbackground-color:#e6e6e6;\r\n}  \r\n  .container {\r\n  background-color:#e6e6e6;\r\n}  \r\n  .table {\r\n  background-color:lightblue;\r\n}  \r\n  .control-label {font-weight:bold; color:#593b2a}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjaWV2ZS12YWxpZGF0ZS1mcmFtZS9SZWNlaXZlQW5kVmFsaWRhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtJQUNFLGFBQWE7SUFDYixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtFQUNyQjtFQUNGLE9BQU8sb0JBQW9CLENBQUM7RUFDNUIsTUFBTSxVQUFVLEVBQUUsV0FBVyxDQUFDO0VBQzlCLE1BQU0sVUFBVSxFQUFFLFdBQVcsQ0FBQztFQUM5QixRQUFRLFVBQVUsRUFBRSxZQUFZLENBQUM7RUFFakM7RUFDRSxXQUFXO0VBQ1gsU0FBUztBQUNYO0VBRUE7QUFDQSx3QkFBd0I7QUFDeEI7RUFDQTtFQUNFLHdCQUF3QjtBQUMxQjtFQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0VBQ0EsZ0JBQWdCLGdCQUFnQixFQUFFLGFBQWEiLCJmaWxlIjoic3JjL2FwcC9yZWNpZXZlLXZhbGlkYXRlLWZyYW1lL1JlY2VpdmVBbmRWYWxpZGF0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAjdGFibGUtc2Nyb2xsIHtcclxuICAgIG92ZXJmbG93OmF1dG87ICBcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxuICB9ICBcclxuICAuZGl2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICB9IFxyXG4gIC5ibG9jayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIH1cclxuLm91dGVye2Rpc3BsYXk6aW5saW5lLWJsb2NrO31cclxuLm9uZSB7d2lkdGg6ODBweDsgaGVpZ2h0OjgwcHg7fVxyXG4udHdvIHt3aWR0aDo4MHB4OyBoZWlnaHQ6ODBweDt9XHJcbi50aHJlZSB7d2lkdGg6ODBweDsgaGVpZ2h0OjEwMHB4O31cclxuXHJcbi5mb3JtLWdyb3VwLnJlcXVpcmVkIC5jb250cm9sLWxhYmVsOmFmdGVyIHtcclxuICBjb250ZW50OlwiKlwiO1xyXG4gIGNvbG9yOnJlZDtcclxufVxyXG5cclxuLmhlcm8gIHtcclxuYmFja2dyb3VuZC1jb2xvcjojZTZlNmU2O1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2U2ZTZlNjtcclxufVxyXG4udGFibGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6bGlnaHRibHVlO1xyXG59XHJcbi5jb250cm9sLWxhYmVsIHtmb250LXdlaWdodDpib2xkOyBjb2xvcjojNTkzYjJhfSJdfQ== */"

/***/ }),

/***/ "./src/app/recieve-validate-frame/ReceiveAndValidate.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/recieve-validate-frame/ReceiveAndValidate.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"hero is-fullheight-with-navbar\">\r\n    <div class=\"hero-body\">\r\n<body>\r\n    <div class=\"container\">\r\n        <div class=\"form-group  required col-md-5\">\r\n            <label for=\"name\" class=\"control-label  col-form-label col-form-label-sm\">Frame Name</label>\r\n            <input type=\"text\" class=\"form-control form-control-sm\" id=\"name\" placeholder=\"Enter Frame Name\" name=\"name\"\r\n                [(ngModel)]=\"name\" placeholder=\"Enter a Frame Identity\" />\r\n\r\n        </div>\r\n        <div class=\"form-group  col-md-5\">\r\n            <label for=\"donRequestId\"  class=\"control-label  col-form-label col-form-label-sm\">Donor Request ID</label>\r\n            <input type=\"id\" class=\"form-control form-control-sm\" id=\"donRequestId\" placeholder=\"Enter Donor Request ID if any\" name=\"donRequestId\" [(ngModel)]=\"donRequestId\"/>\r\n        </div>\r\n        <div class=\"form-inline mb-3\">\r\n        <div class=\"form-group required mx-sm-3 \">\r\n            \r\n                <label class=\"control-label  col-form-label col-form-label-sm\">Frame Size</label>\r\n                <select  [(ngModel)]=\"size\">\r\n                    <option value=\"XS\">XS</option>      \r\n                    <option value=\"S\">S</option>\r\n                    <option value=\"M\">M</option>\r\n                    <option value=\"L\">L</option>\r\n                    <option value=\"XL\">XL</option>\r\n                </select>\r\n             \r\n        </div>\r\n        <div class=\"form-group mx-sm-2 \">\r\n            \r\n                <label class=\"control-label  col-form-label col-form-label-sm\">Frame Color</label>\r\n                <select  [(ngModel)]=\"color\">\r\n                    <option value=\"black\">Black</option>\r\n                    <option value=\"silver\">Silver</option>\r\n                    <option value=\"brown\">Brown</option>\r\n                    <option value=\"gold\">Gold</option>\r\n                </select>\r\n            \r\n        </div>\r\n        <div class=\"form-group mx-sm-2 \">\r\n            \r\n                <label class=\"control-label  col-form-label col-form-label-sm\">Material </label>\r\n                <select  [(ngModel)]=\"material\">\r\n                    <option value=\"fiber\">Fiber</option>\r\n                    <option value=\"plastic\">Plastic</option>\r\n                    <option value=\"metal\">Metal</option>\r\n                </select>\r\n           \r\n        </div>\r\n        <div class=\"form-group mx-sm-2 \">\r\n            \r\n                <label class=\"control-label  col-form-label col-form-label-sm\" >Gender </label>\r\n                <select  [(ngModel)]=\"gender\">\r\n                    <option value=\"male\">Male</option>\r\n                    <option value=\"female\">Female</option>\r\n                </select>\r\n           \r\n        </div>\r\n        </div>\r\n        <div class=\"form-group mx-sm-3\">\r\n            <label class=\"control-label  col-form-label col-form-label-sm\" for=\"remarks\">Description</label>\r\n            <textarea class=\"form-control form-control-sm\" rows=\"2\" id=\"remarks\" placeholder=\"Enter Description\" [(ngModel)]=\"remarks\"></textarea>\r\n        </div>\r\n        <div class=\"form-actions text-center\">\r\n            \r\n        <button class=\"btn btn-primary\" type= \"button\" (click)=\"onAddFrame()\">Add Frame Details</button>\r\n    </div>\r\n <div id=\"table-scroll\">  \r\n            <table class=\"table\">\r\n                <thead class=\"thead-light\">\r\n                    <!-- <label   class=\"col-form-label\">Frame Details</label> -->\r\n                    <!-- <tr>\r\n                        <button (click)=\"onAddFrame()\" *ngIf=\"addForm.get('frameRequests')\">Frame Details</button>\r\n                    </tr> -->\r\n                    <tr>\r\n                        <th>Frame Name</th>\r\n                        <th>User Req ID</th>\r\n                        <th>Gender</th>\r\n                        <th>Size</th>\r\n                        <th>Color</th>\r\n                        <th>Material</th>\r\n                        <th>Description</th>\r\n                        <th></th>\r\n                    </tr>\r\n\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor=\"let frame of frames\">\r\n                        <td>{{ frame.name }}</td>\r\n                        <td>{{ frame.donRequestId }}</td>\r\n                        <td>{{ frame.gender }}</td>\r\n                        <td>{{ frame.size }}</td>\r\n                        <td>{{ frame.color }}</td>\r\n                        <td>{{ frame.material }}</td>\r\n                        <td>{{ frame.remarks }}</td>\r\n                        <td>\r\n                            <button type = \"button\" (click)=\"onRemoveFrame(frame)\">Remove</button>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            <div  class=\"form-actions text-center\" >\r\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"validateFrames()\">Validate</button>\r\n            </div>\r\n        </div> \r\n    </div>\r\n</body>\r\n</div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/recieve-validate-frame/ReceiveAndValidate.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/recieve-validate-frame/ReceiveAndValidate.component.ts ***!
  \************************************************************************/
/*! exports provided: ReceiveAndValidateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReceiveAndValidateComponent", function() { return ReceiveAndValidateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _frame_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frame.model */ "./src/app/recieve-validate-frame/frame.model.ts");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/fesm5/ngx-logger.js");
/* harmony import */ var _ReceiveAndValidate_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ReceiveAndValidate-service */ "./src/app/recieve-validate-frame/ReceiveAndValidate-service.ts");







var ReceiveAndValidateComponent = /** @class */ (function () {
    function ReceiveAndValidateComponent(fb, http, logger, ReceiveAndValidateService) {
        this.fb = fb;
        this.http = http;
        this.logger = logger;
        this.ReceiveAndValidateService = ReceiveAndValidateService;
        this.submitted = false;
        this.frames = [];
    }
    ReceiveAndValidateComponent.prototype.onAddFrame = function () {
        if (!this.size) {
            window.alert("Please select valid Frame Size");
            return;
        }
        var frame = new _frame_model__WEBPACK_IMPORTED_MODULE_4__["Frame"]();
        frame.name = this.name;
        frame.donRequestId = this.donRequestId;
        frame.gender = this.gender;
        frame.color = this.color;
        frame.material = this.material;
        frame.size = this.size;
        frame.remarks = this.remarks;
        this.frames.push(frame);
        this.name = "";
        this.gender = "";
        this.donRequestId = "";
        this.color = "";
        this.material = "";
        this.remarks = "";
        this.size = "";
        //TODO validate & check for and duplicates
    };
    ReceiveAndValidateComponent.prototype.onRemoveFrame = function (frame) {
        var index = this.frames.indexOf(frame);
        this.frames.splice(index, 1);
    };
    ReceiveAndValidateComponent.prototype.ngOnInit = function () {
    };
    /*Bulk Api call for Receive and validate screen-- http://localhost:8080/frame/frames-bulk*/
    ReceiveAndValidateComponent.prototype.validateFrames = function () {
        var _this = this;
        this.submitted = true;
        if (this.frames.length == 0) {
            window.alert("Add atleast one frame to validate");
            return;
        }
        this.logger.debug("receive and validate frames request ::" + JSON.stringify(this.frames));
        var observer = this.ReceiveAndValidateService.validateRequest(this.frames).subscribe(function (data) {
            // this.response = response;
            _this.logger.debug("response" + JSON.stringify(data));
            window.alert("Data Submitted Successfully!");
        });
        console.log("Length " + this.frames);
        var i;
        for (i = 0; i < this.frames.length; i++) {
            this.frames.splice(i, this.frames.length);
        }
    };
    ReceiveAndValidateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ReceiveAndValidate',
            template: __webpack_require__(/*! ./ReceiveAndValidate.component.html */ "./src/app/recieve-validate-frame/ReceiveAndValidate.component.html"),
            providers: [_ReceiveAndValidate_service__WEBPACK_IMPORTED_MODULE_6__["ReceiveAndValidateService"]],
            styles: [__webpack_require__(/*! ./ReceiveAndValidate.component.css */ "./src/app/recieve-validate-frame/ReceiveAndValidate.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"], _ReceiveAndValidate_service__WEBPACK_IMPORTED_MODULE_6__["ReceiveAndValidateService"]])
    ], ReceiveAndValidateComponent);
    return ReceiveAndValidateComponent;
}());



/***/ }),

/***/ "./src/app/recieve-validate-frame/frame.model.ts":
/*!*******************************************************!*\
  !*** ./src/app/recieve-validate-frame/frame.model.ts ***!
  \*******************************************************/
/*! exports provided: Frame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Frame", function() { return Frame; });
var Frame = /** @class */ (function () {
    function Frame() {
    }
    return Frame;
}());



/***/ }),

/***/ "./src/app/selfPaidEnvelope/SelfPaidEnvelope.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/selfPaidEnvelope/SelfPaidEnvelope.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n  text-align: center;\r\n\r\n \r\n}\r\n\r\n.message{\r\n\r\nposition: absolute;\r\n  top: 50%;\r\n  left: 30%;\r\n  margin-top: -50px;\r\n  margin-left: -50px;\r\n  \r\n}\r\n\r\n.hero {\r\n  background-color:#e6e6e6;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VsZlBhaWRFbnZlbG9wZS9TZWxmUGFpZEVudmVsb3BlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7OztBQUdwQjs7QUFFQTs7QUFFQSxrQkFBa0I7RUFDaEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxpQkFBaUI7RUFDakIsa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiIsImZpbGUiOiJzcmMvYXBwL3NlbGZQYWlkRW52ZWxvcGUvU2VsZlBhaWRFbnZlbG9wZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuIFxyXG59XHJcblxyXG4ubWVzc2FnZXtcclxuXHJcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiAzMCU7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC01MHB4O1xyXG4gIFxyXG59XHJcblxyXG4uaGVybyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZTZlNmU2O1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/selfPaidEnvelope/SelfPaidEnvelope.component.html":
/*!******************************************************************!*\
  !*** ./src/app/selfPaidEnvelope/SelfPaidEnvelope.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\r\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n</head>\r\n<section class=\"hero is-fullheight-with-navbar\">\r\n    <div class=\"hero-body\">\r\n<div class=\"container\">\r\n    <h4> Kindly send the Eyeframes via the following mail address.</h4>\r\n<!-- </div> -->\r\n<!-- <div class=\"container\"> -->\r\n    <form>\r\n            <input type=\"radio\" name=\"location\" value=\"baabee\" (change)=\" onRadioClick()\"> Baabee Main office<br>\r\n            \r\n            <input type=\"radio\" name=\"location\" value=\"nearby\" (change)=\" onRadioClick()\"> Nearby Location <i class=\"fa fa-map-marker\"></i><br>\r\n        \r\n        </form>\r\n    </div>\r\n<!-- <div class=\"message\" >\r\n    <h5>Thank you for donating eyeframes to Baabee organization</h5>\r\n</div> -->\r\n    </div>\r\n</section>\r\n<custom-modal id=\"custom-modal-1\">\r\n    <h4>{{modalText}}</h4>\r\n    <div style=\"text-align:center;\">\r\n        <button (click)=\"closeModal('custom-modal-1');\">Close</button>\r\n    </div>\r\n  </custom-modal>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/selfPaidEnvelope/SelfPaidEnvelope.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/selfPaidEnvelope/SelfPaidEnvelope.component.ts ***!
  \****************************************************************/
/*! exports provided: SelfPaidEnvelopeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelfPaidEnvelopeComponent", function() { return SelfPaidEnvelopeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modal.service */ "./src/app/modal.service.ts");



var SelfPaidEnvelopeComponent = /** @class */ (function () {
    function SelfPaidEnvelopeComponent(modalService) {
        this.modalService = modalService;
    }
    SelfPaidEnvelopeComponent.prototype.ngOnInit = function () {
    };
    SelfPaidEnvelopeComponent.prototype.onRadioClick = function () {
        this.modalText = "Thank you for Dononating Eye Frames to IFramex Organisation!";
        this.openModal();
    };
    SelfPaidEnvelopeComponent.prototype.openModal = function () {
        this.modalService.open('custom-modal-1');
    };
    SelfPaidEnvelopeComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    SelfPaidEnvelopeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dropoff',
            template: __webpack_require__(/*! ./SelfPaidEnvelope.component.html */ "./src/app/selfPaidEnvelope/SelfPaidEnvelope.component.html"),
            styles: [__webpack_require__(/*! ./SelfPaidEnvelope.component.css */ "./src/app/selfPaidEnvelope/SelfPaidEnvelope.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_modal_service__WEBPACK_IMPORTED_MODULE_2__["ModalService"]])
    ], SelfPaidEnvelopeComponent);
    return SelfPaidEnvelopeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:8080/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Baab-bee\Angular_WS\BugFix\AngularRepo\iframex\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map