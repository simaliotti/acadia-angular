import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { UsersComponent } from './users/users.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserCreateComponent } from './user-create/user-create.component';
import { AuthComponent } from './auth/auth.component';
import { JwtInterceptorService } from './interceptor/jwt-interceptor.service';
import { ListCategoriesComponent } from './content/categories/list-categories.component';
import { CategoryService } from './core/service/category.service';
import { TrainingsComponent } from './content/trainings/trainings.component';
import { VideosComponent } from './content/videos/videos.component';
import { VideoService } from './core/service/video.service';
import { VideoStreamComponent } from './content/video-stream/video-stream.component';
import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { notifierCustomConfigFactory } from 'angular-notifier/src/notifier.module';

const notifSetting: NotifierOptions = {
  position: {

    horizontal: {

      /**
       * Defines the horizontal position on the screen
       * @type {'left' | 'middle' | 'right'}
       */
      position: 'right',

      /**
       * Defines the horizontal distance to the screen edge (in px)
       * @type {number}
       */
      distance: 12

    },

    vertical: {

      /**
       * Defines the vertical position on the screen
       * @type {'top' | 'bottom'}
       */
      position: 'top',

      /**
       * Defines the vertical distance to the screen edge (in px)
       * @type {number}
       */
      distance: 12,

      /**
       * Defines the vertical gap, existing between multiple notifications (in px)
       * @type {number}
       */
      gap: 8
    }
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    UsersComponent,
    UserDetailComponent,
    UserCreateComponent,
    AuthComponent,
    ListCategoriesComponent,
    TrainingsComponent,
    VideosComponent,
    VideoStreamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NotifierModule.withConfig(notifSetting)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useExisting: JwtInterceptorService, multi: true },
    CategoryService,
    VideoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
