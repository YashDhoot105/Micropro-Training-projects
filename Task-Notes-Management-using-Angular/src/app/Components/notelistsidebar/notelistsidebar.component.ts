// import { Component, OnInit } from '@angular/core';
// import { Note } from '../../Interfaces/note';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { NoteService } from '../../Services/note.service';

// @Component({
//   selector: 'app-notelistsidebar',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './notelistsidebar.component.html',
//   styleUrls: ['./notelistsidebar.component.css'],
// })
// export class NotelistsidebarComponent implements OnInit {
//   newnoteplus: boolean = true;
//   addsubheading: boolean = false;
//   notes: Note[] = [];
//   newnoteheading: string = '';
//   updatednoteheading: string = '';
//   newsubnoteheading: string = '';
//   // updatenoteheading : boolean = false;
//   activenote: string | undefined = '';
//   // currenactivetnote:string | undefined=''
//   newnote: Note = {
//     // id:'',                             //dont initialize, then json server auto generated id
//     note_id: 0,
//     note_heading: '',
//     note_data: [],
//   };
//   constructor(private noteservice: NoteService) {}

//   displayinputbarfornoteheading() {
//     this.newnoteplus = false;
//   }

//   ngOnInit(): void {
//     this.loadnotesheadingtonotelist();
//   }

//   loadnotesheadingtonotelist() {
//     this.noteservice.getnotestonotelist().subscribe((notes) => {
//       this.notes = notes;
//       console.log(notes);
//     });
//   }

//   selectednote(noteid:string | undefined) {
//     this.noteservice.activenoteid.next(noteid);
//     console.log(noteid);
//   }

//   addnoteheading() {
//     if (this.newnoteheading.trim() === '') {
//       return; // Prevent adding empty headings
//     }

//     // const newnote: Note = {
//     (this.newnote.note_id = this.notes.length + 1),
//       (this.newnote.note_heading = this.newnoteheading.trim()),
//       (this.newnote.note_data = []),
//       // };

//       this.noteservice.addnoteheadingtonotelist(this.newnote).subscribe(
//         (response) => {
//           console.log(response);
//           const addedNote = response as Note; // Ensure the response is treated as a Note instead of an object
//           this.notes.unshift(addedNote); // Add the new note to the local array
//           this.newnoteheading = '';
//           this.newnoteplus = true;
//         },
//         (error) => console.log(error)
//       );
//   }

//   deletenoteheading(noteid: string | undefined) {
//     console.log(this.notes);
//     this.noteservice.deletenotefromnotelist(noteid).subscribe((response) => {
//       this.notes = this.notes.filter((note) => note.id !== noteid);
//       console.log(noteid);
//       console.log(this.notes);
//     });
//   }

//   displayinputbartoupdatenoteheading(currentnoteid: string | undefined) {
//     this.activenote = currentnoteid;
//   }

//   updatenoteheading(noteid: string | undefined) {
//     this.activenote = '';
//     if (this.updatednoteheading.trim() === '') {
//       this.noteservice.deletenotefromnotelist(noteid).subscribe((response) => {
//         this.notes = this.notes.filter((note) => note.id !== noteid);
//         console.log(noteid);
//         console.log(this.notes);
//       });
//     }

//     const findnotetoupdatenote = this.notes.find((note) => (note.id = noteid));
//     if (findnotetoupdatenote) {
//       findnotetoupdatenote.note_heading = this.updatednoteheading;

//       this.noteservice
//         .editnoteheadingfromnotelist(noteid, findnotetoupdatenote)
//         .subscribe((response) => {
//           console.log(response);
//         });
//     }
//   }

//   addsubheadingcard(noteid: string | undefined) {
//     console.log('plus');
//     this.noteservice.addsubheadingcard(true, noteid as string | undefined);
//   }
// }

// /////////////////// response error because of type object, not able to push in local array (line no. 117) //////////////////

// // import { Component, OnInit } from '@angular/core';
// // import { Note } from '../../Interfaces/note';
// // import { CommonModule } from '@angular/common';
// // import { FormsModule } from '@angular/forms';
// // import { response } from 'express';
// // import { NoteService } from '../../Services/note.service';

// // @Component({
// //   selector: 'app-notelistsidebar',
// //   standalone: true,
// //   imports: [CommonModule, FormsModule],
// //   templateUrl: './notelistsidebar.component.html',
// //   styleUrl: './notelistsidebar.component.css',
// // })
// // export class NotelistsidebarComponent implements OnInit {
// //   newnoteplus: boolean = true;
// //   notes: Note[] = [];
// //   newnoteheading: string = '';

// //   constructor(private noteservice: NoteService) {}

// //   displayinputbarfornoteheading() {
// //     this.newnoteplus = false;
// //   }

// //   ngOnInit(): void {
// //     // this.addnoteheading();
// //     this.loadnotesheadingtonotelist();
// //   }

// //   loadnotesheadingtonotelist() {
// //     this.noteservice.getnotestonotelist().subscribe((notes) => {
// //       (this.notes = notes), console.log(notes);
// //     });
// //   }

// //   addnoteheading() {
// //     const newnote: Note = {
// //       note_id: this.notes.length + 1,
// //       note_heading: this.newnoteheading.trim(),
// //       note_data: [],
// //     };
// //     if (this.newnoteheading.trim() === '') {
// //       return; // Prevent adding empty headings
// //     }
// //     // this.notes.push({
// //     //   note_id: this.notes.length + 1,
// //     //   note_heading: this.newnoteheading,
// //     // });

// //     // this.newnote.note_heading = this.newnoteheading.trim();
// //     // this.newnote.note_id = this.notes.length + 1;

// //     this.noteservice.addnoteheadingtonotelist(newnote as Note).subscribe(
// //       (response) => console.log(response),
// //       (error) => console.log(error)
// //     );
// //     this.newnoteplus = true;
// //     this.newnoteheading = '';
// //     // this.loadnotesheadingtonotelist()
// //   }
// // }

///////////////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { Note } from '../../Interfaces/note';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoteService } from '../../Services/note.service';

@Component({
  selector: 'app-notelistsidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notelistsidebar.component.html',
  styleUrls: ['./notelistsidebar.component.css'],
})
export class NotelistsidebarComponent implements OnInit {
  newnoteplus: boolean = true;
  addsubheading: boolean = false;
  notes: Note[] = [];
  newnoteheading: string = '';
  updatednoteheading: string = '';
  newsubnoteheading: string = '';
  // updatenoteheading : boolean = false;
  activenote: string | undefined = '';
  currentclickednote: Note | undefined;
  updatecurrentnoteheading: boolean = false;
  // currenactivetnote:string | undefined=''
  displaysubheading: boolean = false;
  newnote: Note = {
    // id:'',                             //dont initialize, then json server auto generated id
    note_id: 0,
    note_heading: '',
    note_data: [],
  };
  constructor(private noteservice: NoteService) {
    this.noteservice.notes$.subscribe((notes) => (this.notes = notes));

    this.noteservice.activenoteid$.subscribe(noteid => {
      if (noteid) {
        this.currentclickednote = this.notes.find(note => note.id === noteid);
      }
    });
  }

  displayinputbarfornoteheading() {
    this.newnoteplus = false;
  }

  ngOnInit(): void {
    this.loadnotesheadingtonotelist();
  }

  loadnotesheadingtonotelist() {
    this.noteservice.getnotestonotelist();
    console.log(this.notes);
  }

  selectednote(noteid: string | undefined) {
    this.noteservice.activenoteid.next(noteid);
    console.log(noteid + "  kwheb");
    this.activenote = noteid;
    this.displaysubheading = !this.displaysubheading;
    // const lielement = document.querySelector(".note-heading-with-icons-container-and-inputbar");
    // (lielement as HTMLElement).classList.toggle("activelielement");
  }

  addnoteheading() {
    if (this.newnoteheading.trim() === '') {
      return; // Prevent adding empty headings
    }

    (this.newnote.note_id = this.notes.length + 1),
    (this.newnote.note_heading = this.newnoteheading.trim()),
    (this.newnote.note_data = []),
    this.noteservice.addnoteheadingtonotelist(this.newnote);
    this.newnoteheading = '';
    this.newnoteplus = true;
  }

  deletenoteheading(noteid: string | undefined) {
    console.log(this.notes);
    this.noteservice.deletenotefromnotelist(noteid);
    console.log(noteid);
    console.log(this.notes);
  }

  displayinputbartoupdatenoteheading(currentnoteid: string | undefined) {
    this.activenote = currentnoteid;
    this.updatecurrentnoteheading = true;
    
  }

  updatenoteheading(noteid: string | undefined) {
    this.activenote = '';
    this.updatecurrentnoteheading = true;
    if (this.updatednoteheading.trim() === '') {
      this.noteservice.deletenotefromnotelist(noteid);
      console.log(noteid);
      console.log(this.notes);
    }

    const findnotetoupdatenote = this.notes.find((note) => (note.id === noteid));
    if (findnotetoupdatenote) {
      findnotetoupdatenote.note_heading = this.updatednoteheading;

      this.noteservice
        .editnoteheadingfromnotelist(noteid, findnotetoupdatenote)
        .subscribe((response) => {
          console.log(response);
        });
      this.updatednoteheading = '';
      this.updatecurrentnoteheading = false;
    }
  }

  addSubheadingCard(noteId: string | undefined) {
    this.noteservice.toggleAddSubheadingCard(true);
    this.noteservice.setActiveNoteId(noteId);
    // this.bool = true;
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
