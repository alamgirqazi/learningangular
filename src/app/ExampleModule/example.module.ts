import { NgModule } from "@angular/core";

import { ExampleComponent } from "./example.component";
import { ReactiveComponent } from "./reactive/reactive.component";
import { TemplateDrivenComponent } from "./reactive/templatedriven.component";
import { HeroDetailComponent1 } from "./reactive/herodetail.component";
// import { ExampleModel } from "./example.model";
import { routing } from "./example.routing";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms"; // <-- #1 import module

@NgModule({
  imports: [routing, CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [
    ExampleComponent,
    ReactiveComponent,
    HeroDetailComponent1,
    TemplateDrivenComponent
  ]
})
export class ExampleModule {}
