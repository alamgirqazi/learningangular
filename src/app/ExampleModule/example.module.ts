import { NgModule } from "@angular/core";

import { ExampleComponent } from "./example.component";
// import { ExampleModel } from "./example.model";
import { routing } from "./example.routing";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [routing, CommonModule, FormsModule],
  declarations: [ExampleComponent]
})
export class ExampleModule {}
