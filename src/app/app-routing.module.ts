import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { LibrarydbComponent } from './pages/librarydb/librarydb.component';
import { MylibraryComponent } from './pages/mylibrary/mylibrary.component';
import { RegisterComponent } from './pages/register/register.component';
import { LibrarysearchComponent } from './pages/librarysearch/librarysearch.component';

const routes: Routes = [
  {
    path: 'librarydb',
    component: LibrarydbComponent,
    title: 'Encyclopedia Berb'

  },
  {
    path: 'librarysearch',
    component: LibrarysearchComponent,
    title: 'Encyclopedia Berb'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home Base'
  },
  {
    path: '',
    redirectTo:'/home',
    pathMatch:'full'},
  { path: 'register',
    component:RegisterComponent
  },
  {
    path: 'aboutme',
    component: AboutmeComponent,
    title: 'A Bit About Me'
  },
  {
    path: 'mylibrary',
    component:MylibraryComponent,
    title: 'My Library'
  },
  {
    path: '**',
    component: ErrorComponent,
    title: 'Error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
