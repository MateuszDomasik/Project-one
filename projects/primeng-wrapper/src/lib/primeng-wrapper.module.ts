import { NgModule } from '@angular/core';
import { PrimengWrapperComponent } from './primeng-wrapper.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CustomMultiselectLazyModule } from './custom-multiselect-lazy/custom-multiselect-lazy.module';
// import { MultiSelectComponent } from './multi-select/multi-select.component';
// import { AppComponent } from './primeng-wrapper-test/src/app/app.component';




@NgModule({
  declarations: [
    PrimengWrapperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomMultiselectLazyModule
  ],
  exports: [
    PrimengWrapperComponent,
    CustomMultiselectLazyModule
  ]
})
export class PrimengWrapperModule { }
