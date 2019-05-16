import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent} from './users/users.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { AuthComponent } from './auth/auth.component';
import { UserGuardGuard } from './guards/user-guard.guard';




const routes: Routes = [
  { path: 'users', component: UsersComponent, canActivate: [UserGuardGuard]},
  { path: 'user-detail/:uuid', component: UserDetailComponent, canActivate: [UserGuardGuard]},
  { path: 'user-create', component: UserCreateComponent, canActivate: [UserGuardGuard]},
  { path: 'signin', component: AuthComponent},
  {
    path: 'lazy',
    loadChildren: './lazy-training/lazy-training.module#LazyTrainingModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



