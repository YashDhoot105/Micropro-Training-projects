import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { TaskdetailsComponent } from './Components/taskdetails/taskdetails.component';
import { TaskformComponent } from './Components/taskform/taskform.component';
import { TasklistComponent } from './Components/tasklist/tasklist.component';
import { NoteslistComponent } from './Components/noteslist/noteslist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, RegisterComponent, TaskdetailsComponent, TaskformComponent, TasklistComponent, NoteslistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Task-Notes-Management-using-Angular';
}
