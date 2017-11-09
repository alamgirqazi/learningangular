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
import { LazyService } from "./lazy.service";
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
  ],
  providers: [LazyService]
})
export class LazyModule {}
