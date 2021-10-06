import { NgModule } from '@angular/core';
import { PrimengWrapperComponent } from './primeng-wrapper.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    PrimengWrapperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  exports: [
    PrimengWrapperComponent
  ]
})
export class PrimengWrapperModule { }
