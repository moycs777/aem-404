import { SpaAngularEditableComponentsModule } from "@adobe/aem-angular-editable-components";
import { APP_BASE_HREF } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import "./components/import-components";
import { ModelManagerService } from "./components/model-manager.service";
import { PageComponent } from "./components/page/page.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AemAngularCoreWcmComponentsTabsV1 } from "@adobe/aem-core-components-angular-spa/containers/tabs/v1";

import { AemAngularCoreWcmComponentsTitleV2 } from "@adobe/aem-core-components-angular-base/authoring/title/v2";
import { AemAngularCoreWcmComponentsBreadCrumbV2 } from "@adobe/aem-core-components-angular-base/layout/breadcrumb/v2";
import { AemAngularCoreWcmComponentsNavigationV1 } from "@adobe/aem-core-components-angular-base/layout/navigation/v1";
import { AemAngularCoreWcmComponentsButtonV1 } from "@adobe/aem-core-components-angular-base/authoring/button/v1";
import { AemAngularCoreWcmComponentsImageV2 } from "@adobe/aem-core-components-angular-base/authoring/image/v2";

import { AemAngularCoreWcmComponentsDownloadV1 } from "@adobe/aem-core-components-angular-base/authoring/download/v1";

import { AemAngularCoreWcmComponentsListV2 } from "@adobe/aem-core-components-angular-base/authoring/list/v2";
import { AemAngularCoreWcmComponentsSeparatorV1 } from "@adobe/aem-core-components-angular-base/authoring/separator/v1";
import { AemAngularCoreWcmComponentsAccordionV1 } from "@adobe/aem-core-components-angular-spa/containers/accordion/v1";
import { AemAngularCoreWcmComponentsLanguageNavigationV1 } from "@adobe/aem-core-components-angular-base/layout/language-navigation/v1";
import { BasicComponentComponent } from "./components/basic-component/basic-component.component";
import { MyComponentComponent } from './components/my-component/my-component.component';
import { LoginFormComponent } from './components/login-form/login-form.component';

@NgModule({
  imports: [
    BrowserModule,
    SpaAngularEditableComponentsModule,
    AppRoutingModule,
    AemAngularCoreWcmComponentsTabsV1,
    AemAngularCoreWcmComponentsTitleV2,
    AemAngularCoreWcmComponentsBreadCrumbV2,
    AemAngularCoreWcmComponentsNavigationV1,
    AemAngularCoreWcmComponentsButtonV1,
    AemAngularCoreWcmComponentsImageV2,
    AemAngularCoreWcmComponentsDownloadV1,
    AemAngularCoreWcmComponentsListV2,
    AemAngularCoreWcmComponentsAccordionV1,
    AemAngularCoreWcmComponentsSeparatorV1,
    AemAngularCoreWcmComponentsLanguageNavigationV1,
    FormsModule,
    HttpClientModule,
  ],
  providers: [ModelManagerService, HttpClientModule, { provide: APP_BASE_HREF, useValue: "/" }],
  declarations: [AppComponent, PageComponent, BasicComponentComponent, MyComponentComponent, LoginFormComponent],
  entryComponents: [PageComponent, BasicComponentComponent, MyComponentComponent, LoginFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
