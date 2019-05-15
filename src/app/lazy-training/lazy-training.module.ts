import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyTrainingRoutingModule } from './lazy-training-routing.module';
import { LazyTrainingComponent } from './lazy-training.component';

@NgModule({
  declarations: [LazyTrainingComponent],
  imports: [
    CommonModule,
    LazyTrainingRoutingModule
  ]
})
export class LazyTrainingModule { }
