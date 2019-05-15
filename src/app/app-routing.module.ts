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
  { path: 'signin', component: AuthComponent},
  {
    path: 'lazy',
    loadChildren: './lazy-training/lazy-training.module#LazyTrainingModule'
  },
  { path: 'users', component: UsersComponent},
  { path: 'user-detail/:uuid', component: UserDetailComponent},
  { path: 'user-create', component: UserCreateComponent},
  { path: '', component: ContentComponent},
  { path: 'categories', component: ListCategoriesComponent},
  { path: 'trainings', component: TrainingsComponent},
  { path: 'videos', component: VideosComponent},
  { path: 'videos/:uuid', component: VideoStreamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



