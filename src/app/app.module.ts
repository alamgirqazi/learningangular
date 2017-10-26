import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { OtherComponent } from "./other/other.component";
import { AnotherComponent } from "./another/another.component";

const appRoutes: Routes = [
  { path: "abc", component: OtherComponent },
  { path: "xyz", component: AnotherComponent }
  // { path: "", redirectTo: "/abc", pathMatch: "full" }
];

@NgModule({
  declarations: [AppComponent, OtherComponent, AnotherComponent],
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
