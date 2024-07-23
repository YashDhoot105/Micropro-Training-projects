import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-notelistsubheadingcards',
  standalone: true,
  imports: [],
  templateUrl: './notelistsubheadingcards.component.html',
  styleUrl: './notelistsubheadingcards.component.css'
})
export class NotelistsubheadingcardsComponent implements OnInit{
  @Input() data: Data = [];
  
  ngOnInit() {
    console.log(this.data);
  }
}
