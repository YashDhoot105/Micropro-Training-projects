import { Component, OnInit } from '@angular/core';
import { User } from '../../Interfaces/user';
import { GetalluserdataService } from '../../Services/getalluserdata.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-getalluserdata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './getalluserdata.component.html',
  styleUrl: './getalluserdata.component.css'
})
export class GetalluserdataComponent implements OnInit {

  users: User[] = [];

  constructor(private getalluserdataService: GetalluserdataService) {
    this.getalluserdataService.users$.subscribe((users) => (this.users = users));
  }

  ngOnInit(): void {
    this.getalluserdataService.getAllUserData();
  }

}
