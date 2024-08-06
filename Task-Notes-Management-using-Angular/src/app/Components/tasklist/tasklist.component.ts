import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, DoCheck, Input, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TaskformComponent } from '../taskform/taskform.component';
import { Data, Task } from '../../Interfaces/task';
import { TaskService } from '../../Services/task.service';
import { Router } from '@angular/router';
import { TaskfilterPipe } from "../../Pipes/taskfilter.pipe";

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule, TaskformComponent, TaskfilterPipe],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent implements OnInit{

  newtask: string = '';
  newtodoplus: boolean = true;
  eyeisHovered: boolean = false;
  plusisHovered: boolean = false;
  updateisHovered: boolean = false;
  deleteisHovered: boolean = false;
  tasks: Task[] = [];
  filteredtasks: Task[] = [];
  currentclickedtaskid: string | undefined = '';
  taskcompleted: boolean = false;
  totalcompletedtasks: number = 0;
  totalincompletetasks: number = 0;
  searchedtask: string = '';
  filter: string = '';
  viewtasksubtaskid: string | undefined = '';
  viewtaskdescriptionid: string | undefined = '';

  
  @ViewChild(TaskformComponent) noteModal!: TaskformComponent;
  
  constructor(private taskservice: TaskService, private router: Router, private cdr: ChangeDetectorRef) {
    this.taskservice.tasks$.subscribe((task) => {
      this.tasks = task;
      // this.filteredtasks = this.tasks
      this.applyfilter(this.filter);
      this.updateTaskCounts();  
      console.log(this.tasks)
     });
    
    //getting task id using observable and storing it in local variable currentclickedtaskid
    this.taskservice.activetaskid$.subscribe((taskid) => {this.currentclickedtaskid = taskid})
  }
  
  ngOnInit(): void {
    this.taskservice.gettask();
    this.filter = 'all';
    console.log(this.tasks);
    this.applyfilter(this.filter);
    console.log("oninit")
    
  }

  updateTaskCounts() {
    this.totalcompletedtasks = this.tasks.filter(task => task.task_completion_status === true).length;
    this.totalincompletetasks = this.tasks.filter(task => task.task_completion_status === false).length;
  }

  searchtasks() {
    if (this.searchedtask.trim()) {
      const searchTermLower = this.searchedtask.toLowerCase();
      this.filteredtasks = this.tasks.filter(task => {
        return Object.values(task).some(value =>
          value?.toString().toLowerCase().includes(searchTermLower)
        );
      });
    } else {
      this.filteredtasks = this.tasks;
    }
  }

  openNoteModal() {
    this.noteModal.openModal();
    this.taskservice.addnewtask.next(true);                      // can open subtask modal from here .....
  }

  handleSave(event: Task | Data) {
    console.log('Note saved:', event);
  }

  addtask() { 
    this.newtodoplus = true;
  }

  displayinputbarfortodoitem() {
    console.log("jnf")
    this.newtodoplus=false
  }

  // getting and updating the activenoteid observable bu applying click on taskbar which includes all the icons, heading,etc
  selectedtask(taskid: string | undefined) {
    this.taskservice.activetaskid.next(taskid);
    console.log(this.currentclickedtaskid);
    console.log(taskid);
  }

  setfilter(filter: string) {
    this.filter = filter;
    console.log(filter);
    this.applyfilter(filter);
  }

  applyfilter(filter: string) {
    if (filter === 'all') {
      this.filteredtasks = this.tasks;
    }
    else if (filter === 'completed') {
      this.filteredtasks = this.tasks.filter(task => task.task_completion_status === true);
    }
    else if (filter === 'remaining') {
      this.filteredtasks = this.tasks.filter(task => task.task_completion_status === false);
    }
    else if (filter === 'due-date') {
      this.filteredtasks = this.tasks.filter(task => task.task_due_date)
    }
  }


  // taskcompletetoggle(currentclickedtaskid:string|undefined) {
  //   this.taskservice.taskcompletetoggle(currentclickedtaskid);
  //   this.taskcompleted = true;
  //   // this.taskservice.gettask();

  //   // this.cdr.detectChanges();
  // }

  // taskincompletetoggle(currentclickedtaskid: string | undefined) {
  //   this.taskservice.taskincompletetoggle(currentclickedtaskid);
  //   console.log(this.taskcompleted)
  //   this.taskcompleted = false;
  //   // this.taskservice.gettask();

  // }

  taskcompletetoggle(taskid: string | undefined) {
    this.taskservice.taskcompletetoggle(taskid).add(() => {
      this.updateTaskCounts();
    });
  }
  
  taskincompletetoggle(taskid: string | undefined) {
    this.taskservice.taskincompletetoggle(taskid).add(() => {
      this.updateTaskCounts();
    });
  }

  viewtask(id :string | undefined) {
    this.router.navigate(['/taskdetails', id]);
  }

  deletetask(taskid: string | undefined) {
    this.taskservice.deletetask(taskid);
    // this.updateTaskCounts();
  }

  addsubtask(taskid: string | undefined) {
    this.noteModal.openModal();
    this.taskservice.addnewsubtask.next(true);
    console.log("taskkkkkk")
  }

  // toggle opening of the subtasks of the particular task 
  viewtasksubtask(taskid: string | undefined) {
    if (this.viewtasksubtaskid === taskid) {
      this.viewtasksubtaskid = undefined
    }
    else {
      this.viewtasksubtaskid = taskid;
    }

    // this.tasksubtask = !this.tasksubtask;
    // this.taskdescription = false;
  }

    // toggle opening of the description of the particular task 
  viewtaskdescription(taskid : string | undefined) {
    if (this.viewtaskdescriptionid === taskid) {
      this.viewtaskdescriptionid = undefined
    }
    else {
      this.viewtaskdescriptionid = taskid;
    }
    // this.tasksubtask = false;
    // this.taskdescription = !this.taskdescription;
  }
}
