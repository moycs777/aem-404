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
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-form-container/login-form-container.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-form-container/login-form-container.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"login__main-container\">\n    <div class=\"login__form-container\">\n        <div class=\"login__form-inner-container\">\n            <div class=\"login__background--mobile\">\n                <img src=\"../assets/svgs/Logo-Compasso-Branco-hor 1.svg\" class=\"login__logo\" alt=\"\">\n            </div>\n            <div class=\"login__form-header\">\n                <h1>Olá,</h1>\n                <p class=\"login__form-text\">Para continuar navegando de forma segura, efetue o login na rede.</p>\n            </div>\n            <app-login-form></app-login-form>\n        </div>\n    </div>\n\n    <div class=\"login__background\">\n        <img src=\"../assets/svgs/Logo-Compasso-Branco-hor 1.svg\" class=\"login__logo\" alt=\"\">\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-form/login-form.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-form/login-form.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <h1 class=\"login__sub-title\">Login</h1>\n    <div class=\"login__form-group\">\n        <input \n            [(ngModel)]=\"user.username\"\n            type=\"text\" \n            id=\"username\"\n            name=\"username\"\n            class=\"login__form-input\" \n            placeholder=\"Usuario\"\n        />\n        <img src=\"../assets/svgs/user.svg\" class=\"login__form-img\" alt=\"\">\n    </div>\n    <div class=\"login__form-group\">\n        <input \n            [(ngModel)]=\"user.password\"\n            [type]=\"inputType\" \n            id=\"password\" \n            name=\"password\" \n            class=\"login__form-input\"\n            placeholder=\"Senha\"\n        />\n        <img (click)=\"changeInputType()\" src=\"../assets/svgs/padlock.svg\" class=\"login__form-img\" alt=\"\">\n    </div>\n    <div class=\"login__form-group login__form-error\">\n        <p *ngIf=\"hasLoginError.length > 0\">{{ hasLoginError }}</p>\n    </div>\n    <div [disabled]=\"isLoading\" (click)=\"onSubmit()\" class=\"login__form-group\">\n        <button type=\"submit\" class=\"login__form-submit-btn\">Continuar</button>\n    </div>\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

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
/* harmony import */ var _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/aem-spa-page-model-manager */ "./node_modules/@adobe/aem-spa-page-model-manager/dist/aem-spa-page-model-manager.js");
/* harmony import */ var _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let AppComponent = class AppComponent {
    constructor() {
        this.updateData = (pageModel) => {
            this.path = pageModel[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_2__["Constants"].PATH_PROP];
            this.items = pageModel[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_2__["Constants"].ITEMS_PROP];
            this.itemsOrder = pageModel[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_2__["Constants"].ITEMS_ORDER_PROP];
        };
        _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__["ModelManager"].initialize().then(this.updateData);
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _adobe_aem_core_components_angular_spa_containers_tabs_v1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @adobe/aem-core-components-angular-spa/containers/tabs/v1 */ "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-tabs-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_title_v2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/title/v2 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-title-v2.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_layout_breadcrumb_v2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/layout/breadcrumb/v2 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-layout-breadcrumb-v2.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_layout_navigation_v1__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/layout/navigation/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-layout-navigation-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_button_v1__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/button/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-button-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_image_v2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/image/v2 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-image-v2.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_download_v1__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/download/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-download-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_list_v2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/list/v2 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-list-v2.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_separator_v1__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/separator/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-separator-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_spa_containers_accordion_v1__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @adobe/aem-core-components-angular-spa/containers/accordion/v1 */ "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-accordion-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_layout_language_navigation_v1__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/layout/language-navigation/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-layout-language-navigation-v1.js");
/* harmony import */ var _components_basic_component_basic_component_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/basic-component/basic-component.component */ "./src/app/components/basic-component/basic-component.component.ts");
/* harmony import */ var _components_my_component_my_component_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/my-component/my-component.component */ "./src/app/components/my-component/my-component.component.ts");
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/login-form/login-form.component */ "./src/app/components/login-form/login-form.component.ts");
/* harmony import */ var _components_login_form_container_login_form_container_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/login-form-container/login-form-container.component */ "./src/app/components/login-form-container/login-form-container.component.ts");



























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["SpaAngularEditableComponentsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _adobe_aem_core_components_angular_spa_containers_tabs_v1__WEBPACK_IMPORTED_MODULE_12__["AemAngularCoreWcmComponentsTabsV1"],
            _adobe_aem_core_components_angular_base_authoring_title_v2__WEBPACK_IMPORTED_MODULE_13__["AemAngularCoreWcmComponentsTitleV2"],
            _adobe_aem_core_components_angular_base_layout_breadcrumb_v2__WEBPACK_IMPORTED_MODULE_14__["AemAngularCoreWcmComponentsBreadCrumbV2"],
            _adobe_aem_core_components_angular_base_layout_navigation_v1__WEBPACK_IMPORTED_MODULE_15__["AemAngularCoreWcmComponentsNavigationV1"],
            _adobe_aem_core_components_angular_base_authoring_button_v1__WEBPACK_IMPORTED_MODULE_16__["AemAngularCoreWcmComponentsButtonV1"],
            _adobe_aem_core_components_angular_base_authoring_image_v2__WEBPACK_IMPORTED_MODULE_17__["AemAngularCoreWcmComponentsImageV2"],
            _adobe_aem_core_components_angular_base_authoring_download_v1__WEBPACK_IMPORTED_MODULE_18__["AemAngularCoreWcmComponentsDownloadV1"],
            _adobe_aem_core_components_angular_base_authoring_list_v2__WEBPACK_IMPORTED_MODULE_19__["AemAngularCoreWcmComponentsListV2"],
            _adobe_aem_core_components_angular_spa_containers_accordion_v1__WEBPACK_IMPORTED_MODULE_21__["AemAngularCoreWcmComponentsAccordionV1"],
            _adobe_aem_core_components_angular_base_authoring_separator_v1__WEBPACK_IMPORTED_MODULE_20__["AemAngularCoreWcmComponentsSeparatorV1"],
            _adobe_aem_core_components_angular_base_layout_language_navigation_v1__WEBPACK_IMPORTED_MODULE_22__["AemAngularCoreWcmComponentsLanguageNavigationV1"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        ],
        providers: [_components_model_manager_service__WEBPACK_IMPORTED_MODULE_8__["ModelManagerService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"], useValue: "/" }],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_page_page_component__WEBPACK_IMPORTED_MODULE_9__["PageComponent"], _components_basic_component_basic_component_component__WEBPACK_IMPORTED_MODULE_23__["BasicComponentComponent"], _components_my_component_my_component_component__WEBPACK_IMPORTED_MODULE_24__["MyComponentComponent"], _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_25__["LoginFormComponent"], _components_login_form_container_login_form_container_component__WEBPACK_IMPORTED_MODULE_26__["LoginFormContainerComponent"]],
        entryComponents: [_components_page_page_component__WEBPACK_IMPORTED_MODULE_9__["PageComponent"], _components_basic_component_basic_component_component__WEBPACK_IMPORTED_MODULE_23__["BasicComponentComponent"], _components_my_component_my_component_component__WEBPACK_IMPORTED_MODULE_24__["MyComponentComponent"], _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_25__["LoginFormComponent"], _components_login_form_container_login_form_container_component__WEBPACK_IMPORTED_MODULE_26__["LoginFormContainerComponent"]],
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

/***/ "./src/app/components/login-form-container/login-form-container.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/components/login-form-container/login-form-container.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(\"http://fonts.cdnfonts.com/css/mark-pro\");\ninput::-ms-reveal,\ninput::-ms-clear {\n  display: none;\n}\n.login__background--mobile {\n  display: none;\n}\n.login__main-container {\n  display: flex;\n  flex-direction: row;\n}\n.login__form-container {\n  display: flex;\n  justify-content: center;\n  width: 50%;\n  height: 100vh;\n  background: #26292C;\n  color: #E0E0E0;\n}\n.login__background {\n  width: 50%;\n  height: 100vh;\n  background-image: url('/etc.clientlibs/angularapp/clientlibs/clientlib-angular/resources/login__background.png');\n  background-size: cover;\n  background-position: center;\n  text-align: center;\n}\n.login__form-inner-container {\n  width: 50%;\n  margin-top: 150px;\n}\n.login__form-header > h1 {\n  margin-bottom: 0;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 60px;\n  line-height: 76px;\n}\n.login__form-text {\n  max-width: 301px;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 20px;\n}\n.login__logo {\n  margin-top: 35px;\n}\n@media (max-width: 800px) {\n  .login__main-container {\n    flex-direction: column;\n  }\n\n  .login__form-container {\n    width: 100%;\n    height: auto;\n  }\n\n  .login__background {\n    display: none;\n  }\n\n  .login__form-inner-container {\n    margin-top: 15px;\n    width: 73%;\n  }\n\n  .login__background--mobile {\n    display: block;\n    text-align: center;\n  }\n\n  .login__form-header {\n    margin-top: 80px;\n  }\n\n  .login__background--mobile > img {\n    width: 306px;\n    height: 69px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1mb3JtLWNvbnRhaW5lci9DOlxcVXNlcnNcXG1vaXNlcy5wYWxhY2lvXFxEb2N1bWVudHNcXEFFTVxcUHJvamVjdG9zXFxhZW0tNDA0XFx1aS5mcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbG9naW4tZm9ybS1jb250YWluZXJcXGxvZ2luLWZvcm0tY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luLWZvcm0tY29udGFpbmVyL2xvZ2luLWZvcm0tY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHFEQUFBO0FBRVI7O0VBRUUsYUFBQTtBQ0FGO0FERUE7RUFDSSxhQUFBO0FDQ0o7QURFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0NKO0FEQ0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEQUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGdIQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDR0o7QUREQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQ0lKO0FERkE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0tKO0FESEE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ01KO0FESkE7RUFDSSxnQkFBQTtBQ09KO0FESkE7RUFDSTtJQUNJLHNCQUFBO0VDT047O0VETEU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ1FOOztFRE5FO0lBQ0ksYUFBQTtFQ1NOOztFRFBFO0lBQ0ksZ0JBQUE7SUFDQSxVQUFBO0VDVU47O0VEUkU7SUFDSSxjQUFBO0lBQ0Esa0JBQUE7RUNXTjs7RURURTtJQUNJLGdCQUFBO0VDWU47O0VEVkU7SUFDSSxZQUFBO0lBQ0EsWUFBQTtFQ2FOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luLWZvcm0tY29udGFpbmVyL2xvZ2luLWZvcm0tY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHA6Ly9mb250cy5jZG5mb250cy5jb20vY3NzL21hcmstcHJvJyk7XHJcblxyXG5pbnB1dDo6LW1zLXJldmVhbCxcclxuaW5wdXQ6Oi1tcy1jbGVhciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4ubG9naW5fX2JhY2tncm91bmQtLW1vYmlsZSB7XHJcbiAgICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcbi5sb2dpbl9fbWFpbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLmxvZ2luX19mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6ICMyNjI5MkM7XHJcbiAgICBjb2xvcjogI0UwRTBFMDtcclxufVxyXG4ubG9naW5fX2JhY2tncm91bmR7IFxyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9naW5fX2JhY2tncm91bmQucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5sb2dpbl9fZm9ybS1pbm5lci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG59XHJcbi5sb2dpbl9fZm9ybS1oZWFkZXIgPiBoMSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYXJrIFBybyc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDc2cHg7XHJcbn1cclxuLmxvZ2luX19mb3JtLXRleHQge1xyXG4gICAgbWF4LXdpZHRoOiAzMDFweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWFyayBQcm8nO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi5sb2dpbl9fbG9nbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC5sb2dpbl9fbWFpbi1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAubG9naW5fX2Zvcm0tY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAubG9naW5fX2JhY2tncm91bmQge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubG9naW5fX2Zvcm0taW5uZXItY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiA3MyU7XHJcbiAgICB9XHJcbiAgICAubG9naW5fX2JhY2tncm91bmQtLW1vYmlsZSB7IFxyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5sb2dpbl9fZm9ybS1oZWFkZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XHJcbiAgICB9XHJcbiAgICAubG9naW5fX2JhY2tncm91bmQtLW1vYmlsZSA+IGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDMwNnB4O1xyXG4gICAgICAgIGhlaWdodDogNjlweDtcclxuICAgIH1cclxufSIsIkBpbXBvcnQgdXJsKFwiaHR0cDovL2ZvbnRzLmNkbmZvbnRzLmNvbS9jc3MvbWFyay1wcm9cIik7XG5pbnB1dDo6LW1zLXJldmVhbCxcbmlucHV0OjotbXMtY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubG9naW5fX2JhY2tncm91bmQtLW1vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sb2dpbl9fbWFpbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ubG9naW5fX2Zvcm0tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6ICMyNjI5MkM7XG4gIGNvbG9yOiAjRTBFMEUwO1xufVxuXG4ubG9naW5fX2JhY2tncm91bmQge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luX19iYWNrZ3JvdW5kLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbl9fZm9ybS1pbm5lci1jb250YWluZXIge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tdG9wOiAxNTBweDtcbn1cblxuLmxvZ2luX19mb3JtLWhlYWRlciA+IGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1mYW1pbHk6IFwiTWFyayBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiA3NnB4O1xufVxuXG4ubG9naW5fX2Zvcm0tdGV4dCB7XG4gIG1heC13aWR0aDogMzAxcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1hcmsgUHJvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cblxuLmxvZ2luX19sb2dvIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5sb2dpbl9fbWFpbi1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAubG9naW5fX2Zvcm0tY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAubG9naW5fX2JhY2tncm91bmQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubG9naW5fX2Zvcm0taW5uZXItY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIHdpZHRoOiA3MyU7XG4gIH1cblxuICAubG9naW5fX2JhY2tncm91bmQtLW1vYmlsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmxvZ2luX19mb3JtLWhlYWRlciB7XG4gICAgbWFyZ2luLXRvcDogODBweDtcbiAgfVxuXG4gIC5sb2dpbl9fYmFja2dyb3VuZC0tbW9iaWxlID4gaW1nIHtcbiAgICB3aWR0aDogMzA2cHg7XG4gICAgaGVpZ2h0OiA2OXB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/components/login-form-container/login-form-container.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/login-form-container/login-form-container.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LoginFormContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormContainerComponent", function() { return LoginFormContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _adobe_aem_spa_component_mapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/aem-spa-component-mapping */ "./node_modules/@adobe/aem-spa-component-mapping/dist/aem-spa-component-mapping.js");
/* harmony import */ var _adobe_aem_spa_component_mapping__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_spa_component_mapping__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let LoginFormContainerComponent = class LoginFormContainerComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginFormContainerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login-form-container',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login-form-container.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-form-container/login-form-container.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login-form-container.component.scss */ "./src/app/components/login-form-container/login-form-container.component.scss")).default]
    })
], LoginFormContainerComponent);

Object(_adobe_aem_spa_component_mapping__WEBPACK_IMPORTED_MODULE_1__["MapTo"])('angularapp/components/login-form-container')(LoginFormContainerComponent);


/***/ }),

/***/ "./src/app/components/login-form/login-form.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login__sub-title {\n  margin-top: 25%;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 30px;\n}\n\n.login__form-group {\n  position: relative;\n  width: 100%;\n  height: 60px;\n  margin-bottom: 10%;\n}\n\n.login__form-input {\n  padding-left: 14px;\n  width: 100%;\n  height: 100%;\n  background: #26292C;\n  border: 1px solid #FFFFFF;\n  box-sizing: border-box;\n  border-radius: 50px;\n  color: #E0E0E0;\n}\n\n.login__form-input::-moz-placeholder {\n  margin-left: 4px;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 20px;\n  color: #E0E0E0;\n}\n\n.login__form-input:-ms-input-placeholder {\n  margin-left: 4px;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 20px;\n  color: #E0E0E0;\n}\n\n.login__form-input::placeholder {\n  margin-left: 4px;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 20px;\n  color: #E0E0E0;\n}\n\n.login__form-img {\n  position: absolute;\n  right: 5%;\n  top: 1rem;\n}\n\n.login__form-error {\n  margin-bottom: 0px;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n  text-align: center;\n  color: #E9B425;\n}\n\n.login__form-submit-btn {\n  width: 100%;\n  height: 67px;\n  background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);\n  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);\n  border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1mb3JtL0M6XFxVc2Vyc1xcbW9pc2VzLnBhbGFjaW9cXERvY3VtZW50c1xcQUVNXFxQcm9qZWN0b3NcXGFlbS00MDRcXHVpLmZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxsb2dpbi1mb3JtXFxsb2dpbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNHSjs7QUREQTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0lKOztBRFhBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDSUo7O0FEWEE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDTUo7O0FESkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDREQUFBO0VBQ0Esa0RBQUE7RUFDQSxtQkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5fX3N1Yi10aXRsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNSU7XHJcbiAgICBmb250LWZhbWlseTogJ01hcmsgUHJvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLmxvZ2luX19mb3JtLWdyb3VwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG59XHJcbi5sb2dpbl9fZm9ybS1pbnB1dCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICMyNjI5MkM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBjb2xvcjogI0UwRTBFMDtcclxufVxyXG4ubG9naW5fX2Zvcm0taW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ01hcmsgUHJvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGNvbG9yOiAjRTBFMEUwO1xyXG59XHJcbi5sb2dpbl9fZm9ybS1pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDUlO1xyXG4gICAgdG9wOiAxcmVtO1xyXG59XHJcbi5sb2dpbl9fZm9ybS1lcnJvciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ01hcmsgUHJvJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjRTlCNDI1O1xyXG59XHJcbi5sb2dpbl9fZm9ybS1zdWJtaXQtYnRuIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2N3B4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjRkYyRDA0IDAlLCAjQzEzMjE2IDEwMCUpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgNXB4IDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59IiwiLmxvZ2luX19zdWItdGl0bGUge1xuICBtYXJnaW4tdG9wOiAyNSU7XG4gIGZvbnQtZmFtaWx5OiBcIk1hcmsgUHJvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ubG9naW5fX2Zvcm0tZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cblxuLmxvZ2luX19mb3JtLWlucHV0IHtcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjMjYyOTJDO1xuICBib3JkZXI6IDFweCBzb2xpZCAjRkZGRkZGO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBjb2xvcjogI0UwRTBFMDtcbn1cblxuLmxvZ2luX19mb3JtLWlucHV0OjpwbGFjZWhvbGRlciB7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1hcmsgUHJvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICNFMEUwRTA7XG59XG5cbi5sb2dpbl9fZm9ybS1pbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1JTtcbiAgdG9wOiAxcmVtO1xufVxuXG4ubG9naW5fX2Zvcm0tZXJyb3Ige1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1hcmsgUHJvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI0U5QjQyNTtcbn1cblxuLmxvZ2luX19mb3JtLXN1Ym1pdC1idG4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2N3B4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRjJEMDQgMCUsICNDMTMyMTYgMTAwJSk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDVweCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/login-form/login-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/login-form/login-form.component.ts ***!
  \***************************************************************/
/*! exports provided: inputTypes, LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputTypes", function() { return inputTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _adobe_aem_spa_component_mapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/aem-spa-component-mapping */ "./node_modules/@adobe/aem-spa-component-mapping/dist/aem-spa-component-mapping.js");
/* harmony import */ var _adobe_aem_spa_component_mapping__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_spa_component_mapping__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/login.service */ "./src/app/services/login.service.ts");





var inputTypes;
(function (inputTypes) {
    inputTypes["TEXT"] = "text";
    inputTypes["PASSWORD"] = "password";
})(inputTypes || (inputTypes = {}));
;
let LoginFormComponent = class LoginFormComponent {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.inputType = inputTypes.PASSWORD;
        this.hasLoginError = "";
        this.user = {
            username: "",
            password: ""
        };
        this.isLoading = false;
    }
    ngOnInit() {
    }
    changeInputType() {
        if (this.inputType === inputTypes.PASSWORD)
            this.inputType = inputTypes.TEXT;
        else
            this.inputType = inputTypes.PASSWORD;
    }
    onSubmit() {
        if (this.isLoading)
            return;
        this.isLoading = true;
        if (this.user.username.trim().length === 0 || this.user.password.trim().length === 0) {
            this.hasLoginError = "Username and password are mandatory";
            this.isLoading = false;
        }
        else {
            this.hasLoginError = "";
            this.getUsersAndPasswords();
        }
    }
    getUsersAndPasswords() {
        this.loginService.login().subscribe((res) => {
            console.log(res.logins);
            this.validateLogin(res.logins);
        });
    }
    validateLogin(users) {
        const user = users.find((u) => u.login === this.user.username);
        this.isLoading = false;
        console.log('user : ', user);
        console.log('user.password : ', user.password);
        console.log('this.user.password : ', this.user.password);
        console.log('!== : ', (user.password + "") !== this.user.password);
        if (user !== undefined && !user) {
            this.hasLoginError = "Incorrect password or username!";
        }
        else {
            if ((user.password + "") !== this.user.password)
                this.hasLoginError = "Incorrect password or username.";
            else {
                console.log('success user : ', user);
                this.hasLoginError = "";
                this.goToHome();
            }
        }
    }
    goToHome() {
        this.router.navigate([this.url]);
    }
};
LoginFormComponent.ctorParameters = () => [
    { type: src_app_services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], LoginFormComponent.prototype, "url", void 0);
LoginFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-form/login-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login-form.component.scss */ "./src/app/components/login-form/login-form.component.scss")).default]
    })
], LoginFormComponent);

Object(_adobe_aem_spa_component_mapping__WEBPACK_IMPORTED_MODULE_1__["MapTo"])("angularapp/components/login-form")(LoginFormComponent);


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

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
    }
    login() {
        return this.http.get('./assets/mocks/people.json');
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



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