import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ExampleComponent } from "./example.component";
import { LoginComponent } from "./login.component";
import { ReactiveComponent } from "./reactive/reactive.component";
import { TemplateDrivenComponent } from "./reactive/templatedriven.component";
const routes: Routes = [
  { path: "", component: ExampleComponent },
  { path: "reactive", component: ReactiveComponent },
  { path: "templatedriven", component: TemplateDrivenComponent },
  { path: "login", component: LoginComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
