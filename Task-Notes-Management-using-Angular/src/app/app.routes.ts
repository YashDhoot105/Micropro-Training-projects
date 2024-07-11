import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { TasklistComponent } from './Components/tasklist/tasklist.component';
import { TaskdetailsComponent } from './Components/taskdetails/taskdetails.component';
import { TaskformComponent } from './Components/taskform/taskform.component';
import { NavbarComponent } from './Components/navbar/navbar.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tasklist', component: TasklistComponent },
  { path: 'taskdetails/:id', component: TaskdetailsComponent },
  { path: 'taskform', component: TaskformComponent },
  { path: 'taskform/:id', component: TaskformComponent }  // For editing tasks
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
