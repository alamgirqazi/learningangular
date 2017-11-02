import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";

// import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
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
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TokenInterceptor } from "./token.interceptor";
import { AuthGuard } from "./projectscomponent/guard.service";
import { ProjectsComponent } from "./projectscomponent/projects.component";
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
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [
    DisplayData,
    AuthGuard,
    AuthService,
    {
      provide: HttpClientModule,
      useClass: TokenInterceptor
      // multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
