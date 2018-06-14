import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GamerforumComponent } from './gamerforum/gamerforum.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { FriendsaddedComponent } from './friendsadded/friendsadded.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'gamerforum', component: GamerforumComponent },
{ path: 'contactus', component: ContactusComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'login', component: LoginComponent },
{ path: 'friendsadded', component: FriendsaddedComponent },
{ path: '**', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule.forRoot()],
  exports: [RouterModule]
})
export class AppRoutingModule { }
