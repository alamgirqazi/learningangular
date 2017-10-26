import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { OtherComponent } from "./other/other.component";
import { AnotherComponent } from "./another/another.component";
import { BrandNewComponent } from "./brandnewcomp/brandnew.component";
import { BrandNewMoreComp } from "./brandnewmorecomp/brandnewmorecomp.component";

const appRoutes: Routes = [
  { path: "abc", component: OtherComponent },
  { path: "brandnew", component: BrandNewComponent },
  { path: "brandnew/more", component: BrandNewMoreComp },
  { path: "xyz", component: AnotherComponent }
  // { path: "", redirectTo: "/", pathMatch: "full" },
  // { path: "**", component: BrandNewMoreComp }
];

@NgModule({
  declarations: [
    AppComponent,
    OtherComponent,
    AnotherComponent,
    BrandNewComponent,
    BrandNewMoreComp
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
