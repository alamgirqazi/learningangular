import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { ExampleComponent } from "./example.component";
import { LoginComponent } from "./login.component";
import { ReactiveComponent } from "./reactive/reactive.component";
import { TemplateDrivenComponent } from "./reactive/templatedriven.component";
import { HeroDetailComponent1 } from "./reactive/herodetail.component";
// import { ExampleModel } from "./example.model";
import { routing } from "./example.routing";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms"; // <-- #1 import module
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    routing,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  declarations: [
    ExampleComponent,
    ReactiveComponent,
    HeroDetailComponent1,
    TemplateDrivenComponent,

    LoginComponent
  ]
})
export class ExampleModule {}
