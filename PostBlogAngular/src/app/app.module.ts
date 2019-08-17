import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostListItemsComponent } from './post-list-items/post-list-items.component';
import { PostFormComponent } from './post-list-items/post-form/post-form.component';
import { SinglePostComponent } from './post-list-items/single-post/single-post.component';
import { PostsService } from './services/posts.service';

const appRoutes: Routes = [
  { path: 'posts', component: PostListItemsComponent},
  { path: 'posts/:id', component: SinglePostComponent},
  { path: 'newpost', component: PostFormComponent},
  { path: '', redirectTo: 'posts', pathMatch: 'full'},
  { path: '**', redirectTo: 'posts'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostListItemsComponent,
    PostFormComponent,
    SinglePostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
