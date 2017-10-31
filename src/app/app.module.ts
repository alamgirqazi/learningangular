import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
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
import { ErrorPage } from "./misccomponents/errorpage.component";
import { OtherComponent } from "./other/other.component";
import { DisplayData } from "./projectscomponent/data.service";
import { ProjectDetailsComponent } from "./projectscomponent/details.component";
import { AuthGuard } from "./projectscomponent/guard.service";
import { AuthService } from "./projectscomponent/auth.service";
import { ProjectsComponent } from "./projectscomponent/projects.component";

const appRoutes: Routes = [
  { path: "abc", component: OtherComponent },
  { path: "", component: OtherComponent },
  {
    path: "projects",
    component: ProjectsComponent,
    canActivate: [AuthGuard],
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
  // { path: "brandnew", component: BrandNewComponent },
  // { path: "brandnew/more", component: BrandNewMoreComp },
  // { path: "xyz", component: AnotherComponent },

  // {
  //   path: "child",
  //   component: ChildComponent,
  //   children: [
  //     {
  //       path: "a",
  //       component: ChildAComponent,
  //       children: [
  //         {
  //           path:  "",
  //           component: ErrorPage
  //         },
  //         {
  //           path: ":id",
  //           component: ChildIdComponent
  //         }
  //       ]
  //     },
  //     {
  //       path: "b",
  //       component: ChildBComponent,
  //       children: [
  //         {
  //           path: "b",
  //           component: ChildBBComponent
  //         },
  //         {
  //           path: ":id",
  //           component: ChildIdBComponent
  //         }
  //       ]
  //     }
  //   ]
  // }
  // { path: "**", component: ErrorPage }
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
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [DisplayData, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
