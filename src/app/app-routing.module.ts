import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GamerforumComponent } from './gamerforum/gamerforum.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'gamerforum', component: GamerforumComponent },
{ path: 'contactus', component: ContactusComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'login', component: LoginComponent },
{path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
