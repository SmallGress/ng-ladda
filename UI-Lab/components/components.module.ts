import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LoadingClickComponent } from "./gLoadingButton/gLoadingButton.component";
import { LoadingComponent } from "./loading/loading.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    LoadingClickComponent,
    LoadingComponent,
  ],
  declarations: [
    LoadingClickComponent,
    LoadingComponent,
  ],
  providers: [],
})
export class ComponentsModule { }
