import { NgModule } from "@angular/core";

import { LazyComponent } from "./lazy.component";
import { routing } from "./lazy.routing";
import { MoreLazyComponent } from "./morelazy.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NamedoutletComponent } from "./namedoutlet.component";
import { RouteraComponent } from "./routera.component";
import { RouterbComponent } from "./routerb.component";
import { PlazyComponent } from "./plazy.component";
import { ClazyComponent } from "./clazy.component";
@NgModule({
  imports: [routing, NgbModule],
  declarations: [
    LazyComponent,
    MoreLazyComponent,
    NamedoutletComponent,
    RouterbComponent,
    RouteraComponent,
    ClazyComponent,
    PlazyComponent
  ]
})
export class LazyModule {}
