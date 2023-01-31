import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './pages/aboutme/aboutme.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { LibrarydbComponent } from './pages/librarydb/librarydb.component';
import { MylibraryComponent } from './pages/mylibrary/mylibrary.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path: 'librarydb', component: LibrarydbComponent},
  {path: 'home', component:HomeComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: 'register', component:RegisterComponent},
  {path: 'aboutme', component:AboutmeComponent},
  {path: 'mylibrary', component:MylibraryComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
