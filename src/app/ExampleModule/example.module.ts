import { NgModule } from "@angular/core";

import { ExampleComponent } from "./example.component";
import { routing } from "./example.routing";

@NgModule({
  imports: [routing],
  declarations: [ExampleComponent]
})
export class ExampleModule {}
