import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppreilComponent } from './single-appreil/single-appreil.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserService } from './services/user.service';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';

const appRoutes: Routes = [
  { path: '', component: AppareilViewComponent},
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppreilComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'users', component: UserListComponent},
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent},
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent},
  { path: 'not-found', component: FourOFourComponent},
  { path: '**', redirectTo: '/not-found'}
];


@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppreilComponent,
    FourOFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
