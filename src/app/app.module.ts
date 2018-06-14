import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GamerforumComponent } from './gamerforum/gamerforum.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { FriendsaddedComponent } from './friendsadded/friendsadded.component';
import { FriendsService } from './friends.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GamerforumComponent,
    ContactusComponent,
    SignupComponent,
    LoginComponent,
    FriendsaddedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService, FriendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
