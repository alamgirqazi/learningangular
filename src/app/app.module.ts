import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { OtherComponent } from "./other/other.component";
import { ProjectsComponent } from "./projectscomponent/projects.component";
import { ProjectDetailsComponent } from "./projectscomponent/details.component";
import { DisplayData } from "./projectscomponent/data.service";
import { AnotherComponent } from "./another/another.component";
import { BrandNewComponent } from "./brandnewcomp/brandnew.component";
import { BrandNewMoreComp } from "./brandnewmorecomp/brandnewmorecomp.component";
import { ChildComponent } from "./ChildComponents/child.component";
import { ChildAComponent } from "./ChildComponents/ChildA.component";
import { ChildBComponent } from "./ChildComponents/childB.component";
import { ChildIdComponent } from "./ChildComponents/ChildId.component";
import { ChildBBComponent } from "./ChildComponents/Childbbcomponent";
import { ChildIdBComponent } from "./ChildComponents/childIdB.component";
import { ErrorPage } from "./misccomponents/errorpage.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule, MatCheckboxModule } from "@angular/material";

const appRoutes: Routes = [
  { path: "abc", component: OtherComponent },
  { path: "", component: OtherComponent },
  {
    path: "projects",
    component: ProjectsComponent,

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
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [DisplayData],
  bootstrap: [AppComponent]
})
export class AppModule {}
