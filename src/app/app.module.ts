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
    TrainingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useExisting: JwtInterceptorService, multi: true },
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
