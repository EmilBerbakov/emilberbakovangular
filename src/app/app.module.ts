import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LibrarydbComponent } from './pages/librarydb/librarydb.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { MylibraryComponent } from './pages/mylibrary/mylibrary.component';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LibrarydbComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    MylibraryComponent,
    AboutmeComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
