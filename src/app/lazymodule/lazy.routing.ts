import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LazyComponent } from "./lazy.component";
import { MoreLazyComponent } from "./morelazy.component";
import { NamedoutletComponent } from "./namedoutlet.component";
import { RouteraComponent } from "./routera.component";
import { RouterbComponent } from "./routerb.component";

const routes: Routes = [
  { path: "", component: LazyComponent },
  { path: "more", component: MoreLazyComponent },
  {
    path: "namedoutlet",
    component: NamedoutletComponent,
    children: [
      {
        path: "abc",
        component: RouteraComponent,
        outlet: "routerA"
      },
      {
        path: "xyz",
        component: RouterbComponent,
        outlet: "routerB"
      }
    ]
  }
  // {
  //   path: 'compose',
  //   component: ComposeMessageComponent,
  //   outlet: 'popup'
  // },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
