import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../Interfaces/task';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  // for keeping track of clicked task with the help of id
  public activetaskid = new BehaviorSubject<string | undefined>('');
  activetaskid$ = this.activetaskid.asObservable();

  // for directly copying the updated array after applying different operations like add, delete,etc into the local array  of any component
  private tasks = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasks.asObservable();

  public addnewtask = new BehaviorSubject<boolean>(false);
  addnewtask$ = this.addnewtask.asObservable();

  // for maintaining the track of tasks locally when updated, added or deleted and using it here only instead of keep changing it in different components
  tasksarray: Task[] = [];


  private tasksUrl = 'http://localhost:3000/tasks';


  constructor(private http: HttpClient) { }

  // load tasks array in the website
  gettask() {
    this.http.get<Task[]>(`${this.tasksUrl}`).subscribe((task) => {
      console.log(this.tasks);
      this.tasksarray = task;
      this.tasks.next(this.tasksarray)
    })
  }

  getsingletask(taskid:string | null) {
    return this.http.get<Task>(`${this.tasksUrl}/${taskid}`)
  }

  // add new tasks from modal form
  addtask(taskdetails: Task) {
    return this.http.post<Task>(`${this.tasksUrl}`, taskdetails).subscribe((task) => {
      console.log(task);
      this.tasksarray.unshift(task);
      this.tasks.next(this.tasksarray);
    })
  }

  taskcompletetoggle(taskid: string | undefined) {
    return this.http.patch<Task>(`${this.tasksUrl}/${taskid}`, { task_completion_status: true }).subscribe((task) => {
      console.log(task + "patch");
      const taskcompletedindex = this.tasksarray.findIndex((task) => { task.id === taskid });
      if (taskcompletedindex > -1) {
        this.tasksarray[taskcompletedindex].task_completion_status = true;
        this.tasks.next(this.tasksarray);
        console.log(this.tasksarray)
      }
    });    
  }   

  taskincompletetoggle(taskid: string | undefined) {
    return this.http.patch<Task>(`${this.tasksUrl}/${taskid}`, { task_completion_status: false }).subscribe((task) => {
      console.log(task + "patch");
      const taskcompletedindex = this.tasksarray.findIndex((task) => { task.id === taskid });
      if (taskcompletedindex > -1) {
        this.tasksarray[taskcompletedindex].task_completion_status = true;
        this.tasks.next(this.tasksarray);
        console.log(this.tasksarray)
      }
    });    
  }

  deletetask(taskid: string | undefined) {
    this.http.delete<void>(`${this.tasksUrl}/${taskid}`).subscribe(() => {
      const deletedtaskindex = this.tasksarray.findIndex((task) => task.id === taskid);
      if (deletedtaskindex > -1) {
        // splice automatically adjusts the indexes of the array 
        this.tasksarray.splice(deletedtaskindex, 1);                     
        console.log(this.tasksarray);
        console.log(deletedtaskindex);
      }
    });
  }

}
