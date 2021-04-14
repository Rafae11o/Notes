import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthPageComponent} from "./auth-page/auth-page.component";
import {HomeComponent} from "./home/home.component";
import {NotesComponent} from './notes/notes.component';
import { Page404Component } from "./page404/page404.component";

import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path: "", component: AuthPageComponent},
  {path: "home", component: HomeComponent, canActivate: [AuthGuardService]},
  {path: "notes", component: NotesComponent, canActivate: [AuthGuardService]},
  {path: "**", component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
