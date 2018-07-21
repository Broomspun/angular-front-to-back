import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { UsersComponent } from './components/users/users.component';
import { UserService } from './services/user.service';
import { PostService } from './services/post.service';
import { PostsComponent } from './components/posts/posts.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';

import { UsersRoutingModule } from './users-routing.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    UserComponent,
    UsersComponent,
    PostsComponent,
    PostFormComponent,
    HomeComponent,
    PostComponent,
  ],
  providers: [UserService, PostService],
  bootstrap: [HomeComponent]
})
export class UsersModule { }
