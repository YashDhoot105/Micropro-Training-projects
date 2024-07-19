import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent {
  newtask: string = '';
  newtodoplus: boolean = true;
  addtask() { 
    this.newtodoplus=true
  }
  displayinputbarfortodoitem() {
    this.newtodoplus=false
   }
}
