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
import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { DisplayData } from "./../projectscomponent/data.service";
import { FilterPipe } from "./../search.pipe";
import { FormsModule } from "@angular/forms";
import { LazyLoginComponent } from "./lazylogin.component";
import { SlimLoadingBarModule } from "ng2-slim-loading-bar";
// import { AuthInterceptor } from "../services/httpinterceptor.service";

@NgModule({
  imports: [
    routing,
    NgbModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    SlimLoadingBarModule
  ],
  declarations: [
    LazyComponent,
    LazyLoginComponent,
    MoreLazyComponent,
    NamedoutletComponent,
    RouterbComponent,
    RouteraComponent,
    ClazyComponent,
    PlazyComponent,
    FilterPipe
  ],
  providers: [LazyService]
})
export class LazyModule {}
