import { Component } from '@angular/core';
import { Note } from '../../Interfaces/note';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notelistsidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notelistsidebar.component.html',
  styleUrl: './notelistsidebar.component.css',
})
export class NotelistsidebarComponent {
  newnoteplus: boolean = true;
  notes: Note[] = [];
  newnoteheading: string = '';

  constructor() {}

  displayinputbarfornoteheading() {
    this.newnoteplus = false;
  }

  addnoteheading() {
    if (this.newnoteheading.trim() === '') {
      return; // Prevent adding empty headings
    }
    this.notes.push({
      note_id: this.notes.length + 1,
      note_heading: this.newnoteheading,
    });
    this.newnoteplus = true;
    this.newnoteheading = '';
  }
}
