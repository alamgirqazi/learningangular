import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LazyComponent } from "./lazy.component";
import { MoreLazyComponent } from "./morelazy.component";

const routes: Routes = [
  { path: "", component: LazyComponent },
  { path: "more", component: MoreLazyComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
