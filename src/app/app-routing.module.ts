import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { LibrarydbComponent } from './librarydb/librarydb.component';

const routes: Routes = [
  {path: 'librarydb', component: LibrarydbComponent},
  {path: 'home', component:HomeComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
