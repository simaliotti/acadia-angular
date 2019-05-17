import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent} from './users/users.component';
import {UserDetailComponent} from './user-detail/user-detail.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { AuthComponent } from './auth/auth.component';
import { UserGuardGuard } from './guards/user-guard.guard';
import { ListCategoriesComponent } from './content/categories/list-categories.component';
import { ContentComponent } from './content/content.component';
import { TrainingsComponent } from './content/trainings/trainings.component';
import { VideosComponent } from './content/videos/videos.component';
import { VideoStreamComponent } from './content/video-stream/video-stream.component';




const routes: Routes = [
  { path: 'users', component: UsersComponent, canActivate: [UserGuardGuard]},
  { path: 'user-detail/:uuid', component: UserDetailComponent, canActivate: [UserGuardGuard]},
  { path: 'user-create', component: UserCreateComponent, canActivate: [UserGuardGuard]},
  { path: 'auth', component: AuthComponent},
  {
    path: 'lazy',
    loadChildren: './lazy-training/lazy-training.module#LazyTrainingModule', canActivate: [UserGuardGuard]
  },
  { path: 'categories', component: ListCategoriesComponent, canActivate: [UserGuardGuard]},
  { path: 'trainings', component: TrainingsComponent, canActivate: [UserGuardGuard]},
  { path: 'videos', component: VideosComponent, canActivate: [UserGuardGuard]},
  { path: 'videos/:uuid', component: VideoStreamComponent, canActivate: [UserGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



