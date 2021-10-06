import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoggingComponent } from './logging/logging.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';

const routes: Routes = [
  // { path: 'customselect', loadChildren: () => import('dist/primeng-wrapper/lib/custom-multiselect-lazy/custom-multiselect-lazy.module')
  //   .then(m => m.CustomMultiselectLazyModule)}
  { path: 'multiselect', component: MultiSelectComponent },
  { path: 'logging', component: LoggingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
