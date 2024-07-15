import { Component } from '@angular/core';
import { NotelistsidebarComponent } from '../notelistsidebar/notelistsidebar.component';
import { NotelistbodyComponent } from '../notelistbody/notelistbody.component';
import { NotelistsubheadingcardsComponent } from '../notelistsubheadingcards/notelistsubheadingcards.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noteslist',
  standalone: true,
  imports: [NotelistsidebarComponent, NotelistbodyComponent, NotelistsubheadingcardsComponent, CommonModule],
  templateUrl: './noteslist.component.html',
  styleUrl: './noteslist.component.css'
})
export class NoteslistComponent {

}
