import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyTrainingComponent } from './lazy-training.component';

const routes: Routes = [

    {
      path: '',
      component: LazyTrainingComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyTrainingRoutingModule { }
