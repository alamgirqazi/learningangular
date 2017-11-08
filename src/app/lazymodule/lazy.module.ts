import { NgModule } from "@angular/core";

import { LazyComponent } from "./lazy.component";
import { routing } from "./lazy.routing";
import { MoreLazyComponent } from "./morelazy.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NamedoutletComponent } from "./namedoutlet.component";
import { RouteraComponent } from "./routera.component";
import { RouterbComponent } from "./routerb.component";
@NgModule({
  imports: [routing, NgbModule],
  declarations: [
    LazyComponent,
    MoreLazyComponent,
    NamedoutletComponent,
    RouterbComponent,
    RouteraComponent
  ]
})
export class LazyModule {}
