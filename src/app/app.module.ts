import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

// import { HttpModule } from "@angular/http";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AnotherComponent } from "./another/another.component";
import { AppComponent } from "./app.component";
import { BrandNewComponent } from "./brandnewcomp/brandnew.component";
import { BrandNewMoreComp } from "./brandnewmorecomp/brandnewmorecomp.component";
import { ChildComponent } from "./ChildComponents/child.component";
import { ChildAComponent } from "./ChildComponents/ChildA.component";
import { ChildBComponent } from "./ChildComponents/childB.component";
import { ChildBBComponent } from "./ChildComponents/Childbbcomponent";
import { ChildIdComponent } from "./ChildComponents/ChildId.component";
import { ChildIdBComponent } from "./ChildComponents/childIdB.component";
import { ExampleModule } from "./ExampleModule/example.module";
import { ErrorPage } from "./misccomponents/errorpage.component";
import { OtherComponent } from "./other/other.component";
import { AuthService } from "./projectscomponent/auth.service";
import { DisplayData } from "./projectscomponent/data.service";
import { ProjectDetailsComponent } from "./projectscomponent/details.component";
import { AuthGuard } from "./projectscomponent/guard.service";
import { ProjectsComponent } from "./projectscomponent/projects.component";
import { Auth0Service } from "./services/auth.service";
import { UserService } from "./services/custom/user.service";
// import { AuthInterceptor } from "./services/httpinterceptor.service";
import { StorageBrowser } from "./services/storage.browser";
import { CookieBrowser } from "./services/cookiestorage.browser";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";

// import { HTTP_INTERCEPTORS } from "@angular/common/http";
// import { TokenInterceptor } from "./token.interceptor";
// import { JSONSearchParams } from "./services/search.params";
const appRoutes: Routes = [
  { path: "abc", component: OtherComponent },
  { path: "", component: OtherComponent },
  { path: "lazy", loadChildren: "./lazymodule/lazy.module#LazyModule" },
  // {
  //   path: "example",
  //   loadChildren: () => ExampleModule
  // },
  {
    path: "example",
    loadChildren: "./ExampleModule/example.module#ExampleModule"
  },
  {
    path: "projects",
    component: ProjectsComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: "",
        component: ErrorPage
      },
      {
        path: ":id",
        component: ProjectDetailsComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    BrandNewComponent,
    BrandNewMoreComp,
    ChildComponent,
    ChildAComponent,
    ChildBComponent,
    ErrorPage,
    ChildIdBComponent,
    ChildBBComponent,
    ChildIdComponent,
    ProjectsComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true }
      // <-- debugging purposes only
    ),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SlimLoadingBarModule.forRoot(),
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [
    DisplayData,
    AuthGuard,
    Auth0Service,
    UserService,
    CookieBrowser,
    AuthService,

    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // },
    // JSONSearchParams,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // },
    StorageBrowser
    // {
    //   provide: HttpClientModule,
    //   useClass: TokenInterceptor
    //   // multi: true
    // }
  ],
  exports: [SlimLoadingBarModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
