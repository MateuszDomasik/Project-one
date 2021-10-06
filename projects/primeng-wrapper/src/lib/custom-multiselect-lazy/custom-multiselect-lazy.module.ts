import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomMultiselectComponent } from './custom-multiselect/custom-multiselect.component';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CustomMultiselectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MultiSelectModule
  ],
  exports: [
    CustomMultiselectComponent
  ]
})
export class CustomMultiselectLazyModule { }
