import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomMultiselectLazyModule, PrimengWrapperModule } from 'primeng-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { LoggingComponent } from './logging/logging.component';

@NgModule({
  declarations: [
    AppComponent,
    MultiSelectComponent,
    LoggingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengWrapperModule,
    CustomMultiselectLazyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
