import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { NoteService } from '../../Services/note.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notelistsubheadingcards',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notelistsubheadingcards.component.html',
  styleUrl: './notelistsubheadingcards.component.css'
})
export class NotelistsubheadingcardsComponent implements OnInit{
  @Input() data: Data = [];
  updatecard: boolean = false;
  updatedsubnoteheading: string = '';
  updatedsubnotecontent:string=''

  constructor(private noteservice: NoteService){}
  
  ngOnInit() {
    console.log(this.data);
  }

  deletesubheadingcard(noteid: string | undefined, subnoteid: string | undefined) {
    this.noteservice.deletesubnote(noteid, subnoteid);
    console.log(this.data);
    console.log(noteid);
    console.log(subnoteid);


    // const subnoteIndex = this.data.findIndex(note => note.id === id);
  }

  updatesubheadingcardbool(noteid: string | undefined, subnoteid: string | undefined) {
    this.updatecard = true;

    // const subnote = this.findSubnoteById(noteId, subnoteId);
    // if (subnote) {
      this.updatedsubnoteheading = this.data['note_data_subheading'] || '';
      this.updatedsubnotecontent = this.data['note_data_content'] || '';
    // }
  }

  updatesubheadingcard(noteid: string | undefined, subnoteid: string | undefined) {
    this.data['note_data_subheading'] = this.updatedsubnoteheading;
    this.data['note_data_content'] = this.updatedsubnotecontent;
    console.log(this.data);
    const data = this.data
    this.noteservice.updatesubnote(noteid, subnoteid, this.updatedsubnoteheading, this.updatedsubnotecontent);
    this.updatecard = false;
  }
}
