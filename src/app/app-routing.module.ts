import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LibrarydbComponent } from './librarydb/librarydb.component';
import { MylibraryComponent } from './mylibrary/mylibrary.component';
import { RegisterComponent } from './register/register.component';

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
