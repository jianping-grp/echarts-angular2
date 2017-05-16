import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsNg2Component } from './echarts-ng2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [EchartsNg2Component],
  exports:[EchartsNg2Component]
})
export class EchartsNg2Module { }
