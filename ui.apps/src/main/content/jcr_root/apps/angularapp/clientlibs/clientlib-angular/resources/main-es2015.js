(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"login__main-container\">\r\n    <div class=\"login__form-container\">\r\n        <div class=\"login__form-inner-container\">\r\n            <div class=\"login__background--mobile\">\r\n                <img src=\"../assets/svgs/Logo-Compasso-Branco-hor 1.svg\" class=\"login__logo\" alt=\"\">\r\n            </div>\r\n            <div class=\"login__form-header\">\r\n                <h1>Olá,</h1>\r\n                <p class=\"login__form-text\">Para continuar navegando de forma segura, efetue o login na rede.</p>\r\n            </div>\r\n            <div class=\"login__form-body\">\r\n                <h1 class=\"login__sub-title\">Login</h1>\r\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n                    <div class=\"login__form-group\">\r\n                        <input \r\n                            type=\"text\" \r\n                            id=\"username\"\r\n                            class=\"login__form-input\" \r\n                            formControlName=\"username\" \r\n                            placeholder=\"Usuario\"\r\n                        />\r\n                        <img src=\"../assets/svgs/user.svg\" class=\"login__form-img\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"login__form-group\">\r\n                        <input \r\n                            [type]=\"inputType\" \r\n                            id=\"password\" \r\n                            class=\"login__form-input\"\r\n                            formControlName=\"password\" \r\n                            placeholder=\"Senha\"\r\n                        />\r\n                        <img (click)=\"changeInputType()\" src=\"../assets/svgs/padlock.svg\" class=\"login__form-img\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"login__form-group login__form-error\">\r\n                        <p *ngIf=\"hasLoginError.length > 0\">{{ hasLoginError }}</p>\r\n                    </div>\r\n                    <div class=\"login__form-group\">\r\n                        <button type=\"submit\" class=\"login__form-submit-btn\">Continuar</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"login__background\">\r\n        <img src=\"../assets/svgs/Logo-Compasso-Branco-hor 1.svg\" class=\"login__logo\" alt=\"\">\r\n    </div>\r\n</div> -->\r\n\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/basic-component/basic-component.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/basic-component/basic-component.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <p>404 test Minha propriedade de texto: {{text}}</p>\n  <p>Meu checkbox está: {{checkbox ? \"marcado\" : \"desmarcado\"}}</p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-component/my-component.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-component/my-component.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <p>minha propiedade de texto {{ text }}</p>\n    <p>meu checkbox esta {{ checkbox ? 'marcado' : 'desmarcado' }}</p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/page.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/page.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aem-page class=\"structure-page\" [attr.data-cq-page-path]=\"path\" [cqPath]=\"path\" [cqItems]=\"items\" [cqItemsOrder]=\"itemsOrder\"></aem-page>\n");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AemPageMatcher, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AemPageMatcher", function() { return AemPageMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page/page.component */ "./src/app/components/page/page.component.ts");





function AemPageMatcher(url) {
    if (url.length) {
        return {
            consumed: url,
            posParams: {
                path: url[url.length - 1],
            },
        };
    }
}
const routes = [
    {
        matcher: AemPageMatcher,
        component: _components_page_page_component__WEBPACK_IMPORTED_MODULE_4__["PageComponent"],
        resolve: {
            path: _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["AemPageDataResolver"],
        },
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        providers: [
            _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["AemPageDataResolver"],
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
                useClass: _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["AemPageRouteReuseStrategy"],
            },
        ],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('http://fonts.cdnfonts.com/css/mark-pro');\r\n\r\ninput::-ms-reveal,\r\ninput::-ms-clear {\r\n  display: none;\r\n}\r\n\r\n.login__background--mobile {\r\n    display:none;\r\n}\r\n\r\n.login__main-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.login__form-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    width: 50%;\r\n    height: 100vh;\r\n    background: #26292C;\r\n    color: #E0E0E0;\r\n}\r\n\r\n.login__background{ \r\n    width: 50%;\r\n    height: 100vh;\r\n    background-image: url('/etc.clientlibs/angularapp/clientlibs/clientlib-angular/resources/login__background.png');\r\n    background-size: cover;\r\n    background-position: center;\r\n    text-align: center;\r\n}\r\n\r\n.login__form-inner-container {\r\n    width: 50%;\r\n    margin-top: 150px;\r\n}\r\n\r\n.login__form-header > h1 {\r\n    margin-bottom: 0;\r\n    font-family: 'Mark Pro';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 60px;\r\n    line-height: 76px;\r\n}\r\n\r\n.login__form-text {\r\n    max-width: 301px;\r\n    font-family: 'Mark Pro';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n}\r\n\r\n.login__sub-title {\r\n    margin-top: 25%;\r\n    font-family: 'Mark Pro';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 30px;\r\n    line-height: 38px;\r\n}\r\n\r\n.login__form-group {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 60px;\r\n    margin-bottom: 10%;\r\n}\r\n\r\n.login__form-input {\r\n    padding-left: 14px;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: #26292C;\r\n    border: 1px solid #FFFFFF;\r\n    box-sizing: border-box;\r\n    border-radius: 50px;\r\n    color: #E0E0E0;\r\n}\r\n\r\n.login__form-input::-moz-placeholder {\r\n    margin-left: 4px;\r\n    font-family: 'Mark Pro';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n    color: #E0E0E0;\r\n}\r\n\r\n.login__form-input:-ms-input-placeholder {\r\n    margin-left: 4px;\r\n    font-family: 'Mark Pro';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n    color: #E0E0E0;\r\n}\r\n\r\n.login__form-input::placeholder {\r\n    margin-left: 4px;\r\n    font-family: 'Mark Pro';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n    color: #E0E0E0;\r\n}\r\n\r\n.login__form-img {\r\n    /* width: 16px; */\r\n    position: absolute;\r\n    right: 5%;\r\n    top: 1rem;\r\n}\r\n\r\n.login__form-error {\r\n    margin-bottom: 0px;\r\n    font-family: 'Mark Pro';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 16px;\r\n    line-height: 20px;\r\n    text-align: center;\r\n    color: #E9B425;\r\n}\r\n\r\n.login__form-submit-btn {\r\n    width: 100%;\r\n    height: 67px;\r\n    background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);\r\n    box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);\r\n    border-radius: 50px;\r\n}\r\n\r\n.login__logo {\r\n    margin-top: 35px;\r\n}\r\n\r\n@media (max-width: 800px) {\r\n    .login__main-container {\r\n        flex-direction: column;\r\n    }\r\n    .login__form-container {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n    .login__background {\r\n        display: none;\r\n    }\r\n    .login__form-inner-container {\r\n        margin-top: 15px;\r\n        width: 73%;\r\n    }\r\n    .login__background--mobile { \r\n        display: block;\r\n        text-align: center;\r\n    }\r\n    .login__form-header {\r\n        margin-top: 80px;\r\n    }\r\n    .login__background--mobile > img {\r\n        width: 306px;\r\n        height: 69px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscURBQXFEOztBQUVyRDs7RUFFRSxhQUFhO0FBQ2Y7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0hBQStEO0lBQy9ELHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFSQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBUkE7SUFDSSxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsU0FBUztBQUNiOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDREQUE0RDtJQUM1RCxrREFBa0Q7SUFDbEQsbUJBQW1CO0FBQ3ZCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsVUFBVTtJQUNkO0lBQ0E7UUFDSSxjQUFjO1FBQ2Qsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFlBQVk7UUFDWixZQUFZO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwOi8vZm9udHMuY2RuZm9udHMuY29tL2Nzcy9tYXJrLXBybycpO1xyXG5cclxuaW5wdXQ6Oi1tcy1yZXZlYWwsXHJcbmlucHV0OjotbXMtY2xlYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLmxvZ2luX19iYWNrZ3JvdW5kLS1tb2JpbGUge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG59XHJcblxyXG4ubG9naW5fX21haW4tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbi5sb2dpbl9fZm9ybS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjYyOTJDO1xyXG4gICAgY29sb3I6ICNFMEUwRTA7XHJcbn1cclxuLmxvZ2luX19iYWNrZ3JvdW5keyBcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9hc3NldHMvaW1hZ2VzL2xvZ2luX19iYWNrZ3JvdW5kLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubG9naW5fX2Zvcm0taW5uZXItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNTBweDtcclxufVxyXG4ubG9naW5fX2Zvcm0taGVhZGVyID4gaDEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWFyayBQcm8nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA3NnB4O1xyXG59XHJcbi5sb2dpbl9fZm9ybS10ZXh0IHtcclxuICAgIG1heC13aWR0aDogMzAxcHg7XHJcbiAgICBmb250LWZhbWlseTogJ01hcmsgUHJvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxufVxyXG4ubG9naW5fX3N1Yi10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNSU7XHJcbiAgICBmb250LWZhbWlseTogJ01hcmsgUHJvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxufVxyXG4ubG9naW5fX2Zvcm0tZ3JvdXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbn1cclxuLmxvZ2luX19mb3JtLWlucHV0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzI2MjkyQztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkZGRkY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGNvbG9yOiAjRTBFMEUwO1xyXG59XHJcbi5sb2dpbl9fZm9ybS1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWFyayBQcm8nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICNFMEUwRTA7XHJcbn1cclxuLmxvZ2luX19mb3JtLWltZyB7XHJcbiAgICAvKiB3aWR0aDogMTZweDsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA1JTtcclxuICAgIHRvcDogMXJlbTtcclxufVxyXG4ubG9naW5fX2Zvcm0tZXJyb3Ige1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYXJrIFBybyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogI0U5QjQyNTtcclxufVxyXG4ubG9naW5fX2Zvcm0tc3VibWl0LWJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjdweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI0ZGMkQwNCAwJSwgI0MxMzIxNiAxMDAlKTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDVweCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxufVxyXG4ubG9naW5fX2xvZ28ge1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAubG9naW5fX21haW4tY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luX19mb3JtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luX19iYWNrZ3JvdW5kIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luX19mb3JtLWlubmVyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICB3aWR0aDogNzMlO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luX19iYWNrZ3JvdW5kLS1tb2JpbGUgeyBcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubG9naW5fX2Zvcm0taGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLmxvZ2luX19iYWNrZ3JvdW5kLS1tb2JpbGUgPiBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAzMDZweDtcclxuICAgICAgICBoZWlnaHQ6IDY5cHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: inputTypes, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputTypes", function() { return inputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/aem-spa-page-model-manager */ "./node_modules/@adobe/aem-spa-page-model-manager/dist/aem-spa-page-model-manager.js");
/* harmony import */ var _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




var inputTypes;
(function (inputTypes) {
    inputTypes["TEXT"] = "text";
    inputTypes["PASSWORD"] = "password";
})(inputTypes || (inputTypes = {}));
let AppComponent = class AppComponent {
    constructor() {
        this.inputType = inputTypes.PASSWORD;
        this.updateData = (pageModel) => {
            this.path = pageModel[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_2__["Constants"].PATH_PROP];
            this.items = pageModel[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_2__["Constants"].ITEMS_PROP];
            this.itemsOrder = pageModel[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_2__["Constants"].ITEMS_ORDER_PROP];
        };
        _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__["ModelManager"].initialize().then(this.updateData);
    }
    changeInputType() {
        if (this.inputType === inputTypes.PASSWORD)
            this.inputType = inputTypes.TEXT;
        else
            this.inputType = inputTypes.PASSWORD;
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "#spa-root",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_import_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/import-components */ "./src/app/components/import-components.ts");
/* harmony import */ var _components_model_manager_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/model-manager.service */ "./src/app/components/model-manager.service.ts");
/* harmony import */ var _components_page_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page/page.component */ "./src/app/components/page/page.component.ts");
/* harmony import */ var _adobe_aem_core_components_angular_spa_containers_tabs_v1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @adobe/aem-core-components-angular-spa/containers/tabs/v1 */ "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-tabs-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_title_v2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/title/v2 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-title-v2.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_layout_breadcrumb_v2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/layout/breadcrumb/v2 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-layout-breadcrumb-v2.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_layout_navigation_v1__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/layout/navigation/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-layout-navigation-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_button_v1__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/button/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-button-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_image_v2__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/image/v2 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-image-v2.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_download_v1__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/download/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-download-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_list_v2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/list/v2 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-list-v2.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_separator_v1__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/separator/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-separator-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_spa_containers_accordion_v1__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @adobe/aem-core-components-angular-spa/containers/accordion/v1 */ "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-accordion-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_layout_language_navigation_v1__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/layout/language-navigation/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-layout-language-navigation-v1.js");
/* harmony import */ var _components_basic_component_basic_component_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/basic-component/basic-component.component */ "./src/app/components/basic-component/basic-component.component.ts");
/* harmony import */ var _components_my_component_my_component_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/my-component/my-component.component */ "./src/app/components/my-component/my-component.component.ts");























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["SpaAngularEditableComponentsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _adobe_aem_core_components_angular_spa_containers_tabs_v1__WEBPACK_IMPORTED_MODULE_10__["AemAngularCoreWcmComponentsTabsV1"],
            _adobe_aem_core_components_angular_base_authoring_title_v2__WEBPACK_IMPORTED_MODULE_11__["AemAngularCoreWcmComponentsTitleV2"],
            _adobe_aem_core_components_angular_base_layout_breadcrumb_v2__WEBPACK_IMPORTED_MODULE_12__["AemAngularCoreWcmComponentsBreadCrumbV2"],
            _adobe_aem_core_components_angular_base_layout_navigation_v1__WEBPACK_IMPORTED_MODULE_13__["AemAngularCoreWcmComponentsNavigationV1"],
            _adobe_aem_core_components_angular_base_authoring_button_v1__WEBPACK_IMPORTED_MODULE_14__["AemAngularCoreWcmComponentsButtonV1"],
            _adobe_aem_core_components_angular_base_authoring_image_v2__WEBPACK_IMPORTED_MODULE_15__["AemAngularCoreWcmComponentsImageV2"],
            _adobe_aem_core_components_angular_base_authoring_download_v1__WEBPACK_IMPORTED_MODULE_16__["AemAngularCoreWcmComponentsDownloadV1"],
            _adobe_aem_core_components_angular_base_authoring_list_v2__WEBPACK_IMPORTED_MODULE_17__["AemAngularCoreWcmComponentsListV2"],
            _adobe_aem_core_components_angular_spa_containers_accordion_v1__WEBPACK_IMPORTED_MODULE_19__["AemAngularCoreWcmComponentsAccordionV1"],
            _adobe_aem_core_components_angular_base_authoring_separator_v1__WEBPACK_IMPORTED_MODULE_18__["AemAngularCoreWcmComponentsSeparatorV1"],
            _adobe_aem_core_components_angular_base_layout_language_navigation_v1__WEBPACK_IMPORTED_MODULE_20__["AemAngularCoreWcmComponentsLanguageNavigationV1"],
        ],
        providers: [_components_model_manager_service__WEBPACK_IMPORTED_MODULE_8__["ModelManagerService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"], useValue: "/" }],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_page_page_component__WEBPACK_IMPORTED_MODULE_9__["PageComponent"], _components_basic_component_basic_component_component__WEBPACK_IMPORTED_MODULE_21__["BasicComponentComponent"], _components_my_component_my_component_component__WEBPACK_IMPORTED_MODULE_22__["MyComponentComponent"]],
        entryComponents: [_components_page_page_component__WEBPACK_IMPORTED_MODULE_9__["PageComponent"], _components_basic_component_basic_component_component__WEBPACK_IMPORTED_MODULE_21__["BasicComponentComponent"], _components_my_component_my_component_component__WEBPACK_IMPORTED_MODULE_22__["MyComponentComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/basic-component/basic-component.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/basic-component/basic-component.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\n  color: red;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYXNpYy1jb21wb25lbnQvYmFzaWMtY29tcG9uZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jhc2ljLWNvbXBvbmVudC9iYXNpYy1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICBjb2xvcjogcmVkO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/basic-component/basic-component.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/basic-component/basic-component.component.ts ***!
  \*************************************************************************/
/*! exports provided: BasicComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicComponentComponent", function() { return BasicComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");



let BasicComponentComponent = class BasicComponentComponent {
    constructor() { }
    ngOnInit() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BasicComponentComponent.prototype, "text", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BasicComponentComponent.prototype, "checkbox", void 0);
BasicComponentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-basic-component",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basic-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/basic-component/basic-component.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./basic-component.component.css */ "./src/app/components/basic-component/basic-component.component.css")).default]
    })
], BasicComponentComponent);

Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_2__["MapTo"])("angularapp/components/basic-component")(BasicComponentComponent);


/***/ }),

/***/ "./src/app/components/container/container.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/container/container.component.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");

Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])("angularapp/components/spa")(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["AEMContainerComponent"]);


/***/ }),

/***/ "./src/app/components/import-components.ts":
/*!*************************************************!*\
  !*** ./src/app/components/import-components.ts ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/container.component */ "./src/app/components/container/container.component.ts");
/* harmony import */ var _responsive_grid_responsive_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./responsive-grid/responsive-grid.component */ "./src/app/components/responsive-grid/responsive-grid.component.ts");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_title_v2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/title/v2 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-title-v2.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_layout_breadcrumb_v2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/layout/breadcrumb/v2 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-layout-breadcrumb-v2.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_layout_navigation_v1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/layout/navigation/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-layout-navigation-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_button_v1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/button/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-button-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_image_v2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/image/v2 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-image-v2.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_download_v1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/download/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-download-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_list_v2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/list/v2 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-list-v2.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_separator_v1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/separator/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-separator-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_spa_containers_accordion_v1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @adobe/aem-core-components-angular-spa/containers/accordion/v1 */ "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-accordion-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_spa_containers_tabs_v1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @adobe/aem-core-components-angular-spa/containers/tabs/v1 */ "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-tabs-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_layout_language_navigation_v1__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/layout/language-navigation/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-layout-language-navigation-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_spa_containers_container_v1__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @adobe/aem-core-components-angular-spa/containers/container/v1 */ "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-container-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_spa_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @adobe/aem-core-components-angular-spa/core */ "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-core.js");
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
















/**
 * Normal MapTo - maps angular components to aem models
 */
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/navigation')(_adobe_aem_core_components_angular_base_layout_navigation_v1__WEBPACK_IMPORTED_MODULE_5__["NavigationV1Component"], { isEmpty: _adobe_aem_core_components_angular_base_layout_navigation_v1__WEBPACK_IMPORTED_MODULE_5__["NavigationV1IsEmptyFn"] });
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/separator')(_adobe_aem_core_components_angular_base_authoring_separator_v1__WEBPACK_IMPORTED_MODULE_10__["SeparatorV1Component"]);
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/container')(_adobe_aem_core_components_angular_spa_containers_container_v1__WEBPACK_IMPORTED_MODULE_14__["ContainerV1Component"], { isEmpty: _adobe_aem_core_components_angular_spa_core__WEBPACK_IMPORTED_MODULE_15__["ContainerIsEmptyFn"] });
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/experiencefragment')(_adobe_aem_core_components_angular_spa_containers_container_v1__WEBPACK_IMPORTED_MODULE_14__["ContainerV1Component"], { isEmpty: _adobe_aem_core_components_angular_spa_core__WEBPACK_IMPORTED_MODULE_15__["ContainerIsEmptyFn"] });
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/download')(_adobe_aem_core_components_angular_base_authoring_download_v1__WEBPACK_IMPORTED_MODULE_8__["DownloadV1Component"], { isEmpty: _adobe_aem_core_components_angular_base_authoring_download_v1__WEBPACK_IMPORTED_MODULE_8__["DownloadV1IsEmptyFn"] });
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/languagenavigation')(_adobe_aem_core_components_angular_base_layout_language_navigation_v1__WEBPACK_IMPORTED_MODULE_13__["LanguageNavigationV1Component"]);
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/list')(_adobe_aem_core_components_angular_base_authoring_list_v2__WEBPACK_IMPORTED_MODULE_9__["ListV2Component"], { isEmpty: _adobe_aem_core_components_angular_base_authoring_list_v2__WEBPACK_IMPORTED_MODULE_9__["ListV2IsEmptyFn"] });
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/breadcrumb')(_adobe_aem_core_components_angular_base_layout_breadcrumb_v2__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbV2Component"], { isEmpty: _adobe_aem_core_components_angular_base_layout_breadcrumb_v2__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbV2IsEmptyFn"] });
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/button')(_adobe_aem_core_components_angular_base_authoring_button_v1__WEBPACK_IMPORTED_MODULE_6__["ButtonV1Component"], { isEmpty: _adobe_aem_core_components_angular_base_authoring_button_v1__WEBPACK_IMPORTED_MODULE_6__["ButtonV1IsEmptyFn"] });
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/image')(_adobe_aem_core_components_angular_base_authoring_image_v2__WEBPACK_IMPORTED_MODULE_7__["ImageV2Component"], { isEmpty: _adobe_aem_core_components_angular_base_authoring_image_v2__WEBPACK_IMPORTED_MODULE_7__["ImageV2IsEmptyFn"] });
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/title')(_adobe_aem_core_components_angular_base_authoring_title_v2__WEBPACK_IMPORTED_MODULE_3__["TitleV2Component"], { isEmpty: _adobe_aem_core_components_angular_base_authoring_title_v2__WEBPACK_IMPORTED_MODULE_3__["TitleV2IsEmptyFn"] });
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/accordion')(_adobe_aem_core_components_angular_spa_containers_accordion_v1__WEBPACK_IMPORTED_MODULE_11__["AccordionV1Component"]);
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/tabs')(_adobe_aem_core_components_angular_spa_containers_tabs_v1__WEBPACK_IMPORTED_MODULE_12__["TabsV1Component"]);
/**
 * Demonstrating lazy loading external modules and components.
 * Loading the following components with LazyMapTo - so they are loaded only when we need them!
 */
const TeaserV1Component = () => __webpack_require__.e(/*! import() | adobe-aem-core-components-angular-base-authoring-teaser-v1 */ "adobe-aem-core-components-angular-base-authoring-teaser-v1").then(__webpack_require__.bind(null, /*! @adobe/aem-core-components-angular-base/authoring/teaser/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-teaser-v1.js")).then(Module => Module.TeaserV1Component);
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["LazyMapTo"])('angularapp/components/teaser')(TeaserV1Component);
const CarouselV1Component = () => __webpack_require__.e(/*! import() | adobe-aem-core-components-angular-spa-containers-carousel-v1 */ "adobe-aem-core-components-angular-spa-containers-carousel-v1").then(__webpack_require__.bind(null, /*! @adobe/aem-core-components-angular-spa/containers/carousel/v1 */ "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-carousel-v1.js")).then(Module => Module.CarouselV1Component);
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["LazyMapTo"])('angularapp/components/carousel')(CarouselV1Component);
/**
 * Demonstrates lazy loading an internal component.
 */
/**
 * Default Edit configuration for the Text component that interact with the Core Text component and sub-types
 */
const TextEditConfig = {
    emptyLabel: 'Text',
    isEmpty: cqModel => !cqModel || !cqModel.text || cqModel.text.trim().length < 1
};
const LazyTextModule = () => __webpack_require__.e(/*! import() | text-text-component */ "text-text-component").then(__webpack_require__.bind(null, /*! ./text/text.component */ "./src/app/components/text/text.component.ts")).then(Module => Module.TextComponent);
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["LazyMapTo"])('angularapp/components/text')(LazyTextModule, TextEditConfig);


/***/ }),

/***/ "./src/app/components/model-manager.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/model-manager.service.ts ***!
  \*****************************************************/
/*! exports provided: ModelManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelManagerService", function() { return ModelManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/aem-spa-page-model-manager */ "./node_modules/@adobe/aem-spa-page-model-manager/dist/aem-spa-page-model-manager.js");
/* harmony import */ var _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let ModelManagerService = class ModelManagerService {
    getData(cfg) {
        return _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__["ModelManager"].getData(cfg);
    }
};
ModelManagerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ModelManagerService);



/***/ }),

/***/ "./src/app/components/my-component/my-component.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/my-component/my-component.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktY29tcG9uZW50L215LWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/my-component/my-component.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/my-component/my-component.component.ts ***!
  \*******************************************************************/
/*! exports provided: MyComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyComponentComponent", function() { return MyComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _adobe_aem_spa_component_mapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/aem-spa-component-mapping */ "./node_modules/@adobe/aem-spa-component-mapping/dist/aem-spa-component-mapping.js");
/* harmony import */ var _adobe_aem_spa_component_mapping__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_spa_component_mapping__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let MyComponentComponent = class MyComponentComponent {
    constructor() { }
    ngOnInit() {
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], MyComponentComponent.prototype, "text", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], MyComponentComponent.prototype, "checkbox", void 0);
MyComponentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-my-component',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./my-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/my-component/my-component.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./my-component.component.css */ "./src/app/components/my-component/my-component.component.css")).default]
    })
], MyComponentComponent);

Object(_adobe_aem_spa_component_mapping__WEBPACK_IMPORTED_MODULE_1__["MapTo"])("angularapp/components/my-component")(MyComponentComponent);


/***/ }),

/***/ "./src/app/components/page/page.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/page/page.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/page/page.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/page/page.component.ts ***!
  \***************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _model_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model-manager.service */ "./src/app/components/model-manager.service.ts");





let PageComponent = class PageComponent {
    constructor(route, modelManagerService) {
        this.route = route;
        this.modelManagerService = modelManagerService;
        this.modelManagerService
            .getData({ path: this.route.snapshot.data.path })
            .then((data) => {
            this.path = data[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["Constants"].PATH_PROP];
            this.items = data[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["Constants"].ITEMS_PROP];
            this.itemsOrder = data[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["Constants"].ITEMS_ORDER_PROP];
        });
    }
};
PageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _model_manager_service__WEBPACK_IMPORTED_MODULE_4__["ModelManagerService"] }
];
PageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-main",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/page.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./page.component.css */ "./src/app/components/page/page.component.css")).default]
    })
], PageComponent);



/***/ }),

/***/ "./src/app/components/responsive-grid/responsive-grid.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/responsive-grid/responsive-grid.component.ts ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");

Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])("wcm/foundation/components/responsivegrid")(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["AEMResponsiveGridComponent"]);


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
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2018 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const environment = {
    appRoot: "/content/angularapp/us/en/home.html",
    production: false,
    publicUrl: '/etc.clientlibs/angularapp/clientlibs/clientlib-angular/resources',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
else {
    // In development mode, redirect from "/" to app root
    if (location.pathname === "/" && _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appRoot) {
        location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appRoot;
    }
}
const initialStateScriptTag = document.getElementById("__AEM_STATE__");
if (!!initialStateScriptTag) {
    try {
        const initialState = JSON.parse(initialStateScriptTag.innerHTML);
        // @ts-ignore
        window.initialModel = initialState.rootModel;
        initialStateScriptTag.remove();
    }
    catch (err) {
        console.warn("failed to hydrate app", err);
    }
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\moises.palacio\Documents\AEM\Projectos\aem-404\ui.frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map