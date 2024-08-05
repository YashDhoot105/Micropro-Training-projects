import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { TasklistComponent } from './Components/tasklist/tasklist.component';
import { TaskdetailsComponent } from './Components/taskdetails/taskdetails.component';
import { TaskformComponent } from './Components/taskform/taskform.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { NoteslistComponent } from './Components/noteslist/noteslist.component';
import { NotelistsidebarComponent } from './Components/notelistsidebar/notelistsidebar.component';
import { NotelistbodyComponent } from './Components/notelistbody/notelistbody.component';
import { SubheadingcarddetailsComponent } from './Components/subheadingcarddetails/subheadingcarddetails.component';

export const routes: Routes = [
  { path: '', redirectTo: '/tasklist', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tasklist', component: TasklistComponent },
  { path: 'taskdetails', component: TaskdetailsComponent },
  { path: 'taskdetails/:id', component: TaskdetailsComponent },
  { path: 'taskform', component: TaskformComponent },
  { path: 'taskform/:id', component: TaskformComponent },  // For editing tasks
  { path: 'noteslist', component: NoteslistComponent },
  { path: 'subheadingcarddetails', component: SubheadingcarddetailsComponent },
  {path:'subheadingcarddetails/:id/:subheadingnoteid', component:SubheadingcarddetailsComponent}
  
  // { path: 'noteslistbody', component: NotelistbodyComponent },

  // { path: 'noteslistsidebar/:id' , component:NotelistsidebarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
