import { Component, OnInit } from '@angular/core';
import { Note } from '../../Interfaces/note';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../Services/note.service';
import { response } from 'express';

@Component({
  selector: 'app-notelistsidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notelistsidebar.component.html',
  styleUrls: ['./notelistsidebar.component.css'],
})
export class NotelistsidebarComponent implements OnInit {
  newnoteplus: boolean = true;
  addsubheading :boolean = false;
  notes: Note[] = [];
  newnoteheading: string = '';
  newsubnoteheading : string = '';
  newnote: Note = {
    note_id:0,
    note_heading:'',
    note_data:[]
  }
  constructor(private noteservice: NoteService) {}

  displayinputbarfornoteheading() {
    this.newnoteplus = false;
  }

  ngOnInit(): void {
    this.loadnotesheadingtonotelist();
  }

  loadnotesheadingtonotelist() {
    this.noteservice.getnotestonotelist().subscribe((notes) => {
      this.notes = notes;
      console.log(notes);
    });
  }

  addnoteheading() {
    if (this.newnoteheading.trim() === '') {
      return; // Prevent adding empty headings
    }

    // const newnote: Note = {
      this.newnote.note_id= this.notes.length + 1,
      this.newnote.note_heading= this.newnoteheading.trim(),
      this.newnote.note_data= [],
    // };

    this.noteservice.addnoteheadingtonotelist(this.newnote).subscribe(
      (response) => {
        console.log(response)
        const addedNote = response as Note; // Ensure the response is treated as a Note instead of an object
        this.notes.push(addedNote); // Add the new note to the local array
        this.newnoteheading = '';
        this.newnoteplus = true;
      },
      (error) => console.log(error)
    );
  }

  addsubheadingtonote() {
    this.addsubheading = true;
  }

  
  deletenoteheading(note_id:number){
    console.log(this.notes)
    this.noteservice.deletenotefromnotelist(note_id).subscribe(
      (response) => {
        this.notes = this.notes.filter(note => note.note_id !== note_id);
        console.log(note_id);
      }
    )
  }
}



/////////////////// response error because of type object, not able to push in local array (line no. 117) //////////////////

// import { Component, OnInit } from '@angular/core';
// import { Note } from '../../Interfaces/note';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { response } from 'express';
// import { NoteService } from '../../Services/note.service';

// @Component({
//   selector: 'app-notelistsidebar',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './notelistsidebar.component.html',
//   styleUrl: './notelistsidebar.component.css',
// })
// export class NotelistsidebarComponent implements OnInit {
//   newnoteplus: boolean = true;
//   notes: Note[] = [];
//   newnoteheading: string = '';

//   constructor(private noteservice: NoteService) {}

//   displayinputbarfornoteheading() {
//     this.newnoteplus = false;
//   }

//   ngOnInit(): void {
//     // this.addnoteheading();
//     this.loadnotesheadingtonotelist();
//   }

//   loadnotesheadingtonotelist() {
//     this.noteservice.getnotestonotelist().subscribe((notes) => {
//       (this.notes = notes), console.log(notes);
//     });
//   }

//   addnoteheading() {
//     const newnote: Note = {
//       note_id: this.notes.length + 1,
//       note_heading: this.newnoteheading.trim(),
//       note_data: [],
//     };
//     if (this.newnoteheading.trim() === '') {
//       return; // Prevent adding empty headings
//     }
//     // this.notes.push({
//     //   note_id: this.notes.length + 1,
//     //   note_heading: this.newnoteheading,
//     // });

//     // this.newnote.note_heading = this.newnoteheading.trim();
//     // this.newnote.note_id = this.notes.length + 1;

//     this.noteservice.addnoteheadingtonotelist(newnote as Note).subscribe(
//       (response) => console.log(response),
//       (error) => console.log(error)
//     );
//     this.newnoteplus = true;
//     this.newnoteheading = '';
//     // this.loadnotesheadingtonotelist()
//   }
// }
