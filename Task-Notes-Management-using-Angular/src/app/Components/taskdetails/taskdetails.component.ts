import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { TaskService } from '../../Services/task.service';
import { Task } from '../../Interfaces/task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-taskdetails',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './taskdetails.component.html',
  styleUrl: './taskdetails.component.css'
})
export class TaskdetailsComponent implements OnInit {
  activetask: Task | undefined;

  constructor(private activatedroute: ActivatedRoute, private taskservice: TaskService) { }
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(param => {
      console.log(param.get('id'));
      this.taskservice.getsingletask(param.get('id')).subscribe(task => {
        this.activetask = task;
      })
    })
  }
}
