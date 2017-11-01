import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ExampleComponent } from "./example.component";
import { ReactiveComponent } from "./reactive/reactive.component";
const routes: Routes = [
  { path: "", component: ExampleComponent },
  { path: "reactive", component: ReactiveComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
