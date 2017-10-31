import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ExampleComponent } from "./example.component";

const routes: Routes = [{ path: "", component: ExampleComponent }];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
