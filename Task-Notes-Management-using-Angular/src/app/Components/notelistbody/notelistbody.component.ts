// import { Component, OnInit } from '@angular/core';
// import { NotelistsubheadingcardsComponent } from '../notelistsubheadingcards/notelistsubheadingcards.component';
// import { NoteService } from '../../Services/note.service';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { Data, Note } from '../../Interfaces/note';
// import { response } from 'express';

// @Component({
//   selector: 'app-notelistbody',
//   standalone: true,
//   imports: [NotelistsubheadingcardsComponent, CommonModule, FormsModule],
//   templateUrl: './notelistbody.component.html',
//   styleUrl: './notelistbody.component.css',
// })
// export class NotelistbodyComponent implements OnInit {
//   addsubheadingcard: boolean = false;
//   newcardsubheading: string = '';
//   newcardsubheadingcontent: string = '';
//   newsubheadingcarddata: Data = {
//     noteid: '',
//     note_data_subheading: '',
//     note_data_content: '',
//   };
//   activenote: string | undefined = '';
//   // notes: Note[]=[]

//   constructor(private noteservice: NoteService) {}

//   ngOnInit(): void {

//     this.noteservice.activenoteid.subscribe(activenote => {this.activenote = activenote});



//     console.log(this.addsubheadingcard);
//     this.noteservice.addsubheading$.subscribe(
//       (status) => (this.addsubheadingcard = status)
//     );
//     this.noteservice.activenoteid$.subscribe(
//       (noteid) => (this.newsubheadingcarddata.noteid = noteid)
//     );
//     console.log(this.addsubheadingcard);
//     console.log(this.newsubheadingcarddata.noteid);
//   }

//   savesubheadingcarddetails() {
//     this.newsubheadingcarddata.note_data_subheading =
//       this.newcardsubheading.trim();
//     this.newsubheadingcarddata.note_data_content =
//       this.newcardsubheadingcontent.trim();

//       // const note = this.notes.find(note => note.id === this.newsubheadingcarddata.noteid);
//       // note?.note_data?.push(this.newsubheadingcarddata)

//     this.noteservice
//       .addsubheadingcarddetailstonotes(
//         this.newsubheadingcarddata,
//         this.newsubheadingcarddata.noteid
//       )
//       .subscribe((response) => {
//         console.log(response);
//       });
//     console.log(this.newsubheadingcarddata);
//   }
// }






///////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { NotelistsubheadingcardsComponent } from '../notelistsubheadingcards/notelistsubheadingcards.component';
import { NoteService } from '../../Services/note.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Data, Note } from '../../Interfaces/note';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-notelistbody',
  standalone: true,
  imports: [NotelistsubheadingcardsComponent, CommonModule, FormsModule],
  templateUrl: './notelistbody.component.html',
  styleUrl: './notelistbody.component.css',
})
export class NotelistbodyComponent implements OnInit {
  addsubheadingcard: boolean = false;
  newcardsubheading: string = '';
  newcardsubheadingcontent: string = '';
  newsubheadingcarddata: Data = {
    noteid: '',
    note_data_subheading: '',
    note_data_content: '',
  };
  activenote: Note | undefined;
  notes: Note[] = []

  constructor(private noteservice: NoteService) {
  }
  
  ngOnInit(): void {
    
    this.noteservice.activenoteid$.subscribe(noteid => {
      if (noteid) {
        this.activenote = this.notes.find(note => note.id === noteid);
      }
    });
    
    this.noteservice.addsubheadingcard$.subscribe(status => {
      this.addsubheadingcard = status;
    });
    
    // this.noteservice.notes$.subscribe((notes) => (this.notes = notes));
    this.noteservice.notes$.subscribe((notes) => (this.notes = notes));


    console.log(this.addsubheadingcard);
  
    console.log(this.addsubheadingcard);
    console.log(this.newsubheadingcarddata.noteid);
  }

  savesubheadingcarddetails(note: Note) {
    this.newsubheadingcarddata.noteid = `${note.id}`,

    this.newsubheadingcarddata.note_data_subheading =
      this.newcardsubheading.trim();
    this.newsubheadingcarddata.note_data_content =
      this.newcardsubheadingcontent.trim();

    // const note = this.notes.find(note => note.id === this.newsubheadingcarddata.noteid);
    // note?.note_data?.push(this.newsubheadingcarddata)
    console.log(this.activenote)

    if (this.activenote) {
      console.log(this.activenote)
      this.newsubheadingcarddata.note_data_subheading = this.newcardsubheading.trim();
      this.newsubheadingcarddata.note_data_content = this.newcardsubheadingcontent.trim();

      this.noteservice.addsubheading(this.activenote.id, this.newsubheadingcarddata);
    }
    this.addsubheadingcard = false;
    const hidenewcard = document.querySelector(".newsubehadingcard");
    (hidenewcard as HTMLElement).style.display = 'none';
    // this.newsubheadingcarddata.note_data_subheading =''
    // this.newsubheadingcarddata.note_data_content =''
  }
}
