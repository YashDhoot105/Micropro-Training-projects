import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Data, Task } from '../../Interfaces/task';
import { TaskService } from '../../Services/task.service';
@Component({
  selector: 'app-taskform',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './taskform.component.html',
  styleUrl: './taskform.component.css'
})
export class TaskformComponent {
  taskheading: string = '';
  subtask: string = '';
  subtaskduedate?: Date;
  taskdescription: string = '';
  isVisible: boolean = false;
  taskpriority: string = '';
  tasks: Task[] = [];
  taskduedate?: Date;
  addnewtaskbool: boolean = false;
  addnewsubtaskbool: boolean = false;
  currenttaskid: string | undefined= '';

  taskdetails: Task = {
    task_created_date: null,
    task_id: 0,
    task_heading: '',
    task_description: '',
    task_completion_status: false,
    task_priority_status: '',
    task_due_date: null,
    task_data: [],
  };

  subtaskdetails: Data = {
    id:new Date().toString(),
    taskid: this.currenttaskid,
    task_data_subtask: '',
    task_data_subtask_created_date: null,
    task_data_subtask_due_date:null
  }


  constructor(private taskservice: TaskService) {
    this.taskservice.tasks$.subscribe((task) => { this.tasks = task });
    this.taskservice.activetaskid$.subscribe((taskid) => { this.currenttaskid = taskid });
    this.taskservice.addnewtask$.subscribe(bool => this.addnewtaskbool = bool);
    this.taskservice.addnewsubtask$.subscribe(bool => this.addnewsubtaskbool = bool);

  }

  // passing the modal data of the task to the tasklist component
  @Output() save = new EventEmitter<(Task | Data)>();

  openModal() {
    console.log(this.taskpriority);
    this.isVisible = true;
  }

  closeModal() {
    console.log(this.taskpriority);
    this.isVisible = false;
    this.taskservice.addnewtask.next(false);
    this.taskservice.addnewsubtask.next(false);

  }

  onSubmit() {
    this.taskdetails.task_created_date = new Date().toISOString();
    this.taskdetails.task_id = this.tasks.length + 1;
    this.taskdetails.task_heading = this.taskheading.trim();
    this.taskdetails.task_description = this.taskdescription.trim();
    this.taskdetails.task_priority_status = this.taskpriority;
    this.taskdetails.task_due_date = this.taskduedate;
    this.taskdetails.task_completion_status = false;

    this.save.emit(this.taskdetails);
    this.closeModal();
    this.taskservice.addtask(this.taskdetails)
  }

  addsubtask() {
    this.subtaskdetails.taskid = this.currenttaskid;
    this.subtaskdetails.task_data_subtask = this.subtask.trim();
    this.subtaskdetails.task_data_subtask_created_date = new Date().toISOString();
    this.subtaskdetails.task_data_subtask_due_date = this.subtaskduedate;
    this.save.emit(this.subtaskdetails);
    this.closeModal();
    this.taskservice.addsubtask(this.currenttaskid, this.subtaskdetails);
  }
}

