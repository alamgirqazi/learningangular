import { NgModule } from "@angular/core";

import { LazyComponent } from "./lazy.component";
import { routing } from "./lazy.routing";
import { MoreLazyComponent } from "./morelazy.component";

@NgModule({
  imports: [routing],
  declarations: [LazyComponent, MoreLazyComponent]
})
export class LazyModule {}
