// import { Injectable } from '@angular/core';
// import { Data, Note } from '../Interfaces/note';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class NoteService {
//   private addsubheading = new BehaviorSubject<boolean>(false);
//   addsubheading$ = this.addsubheading.asObservable();

//   public activenoteid = new BehaviorSubject<string | undefined>('');
//   activenoteid$ = this.activenoteid.asObservable();

//   private notesUrl = 'http://localhost:3000/notes';

//   constructor(private http: HttpClient) {}

//   addsubheadingcard(addsubheadingcard: boolean, noteid: string | undefined) {
//     this.addsubheading.next(addsubheadingcard);
//     this.activenoteid.next(noteid);
//   }

//   addnoteheadingtonotelist(note: Note) {
//     return this.http.post(`${this.notesUrl}`, note);
//   }

//   getnotestonotelist(): Observable<Note[]> {
//     return this.http.get<Note[]>(this.notesUrl);
//   }

//   deletenotefromnotelist(id: string | undefined): Observable<void> {
//     const url = `${this.notesUrl}/${id}`;
//     return this.http.delete<void>(url);
//   }

//   editnoteheadingfromnotelist(
//     id: string | undefined,
//     updatednoteheading: object
//   ): Observable<string> {
//     const url = `${this.notesUrl}/${id}`;
//     return this.http.put<string>(url, updatednoteheading);
//   }

//   addsubheadingcarddetailstonotes(
//     subheadingdata: Data,
//     noteid: string | undefined
//   ) {
//     return this.http.put(`${this.notesUrl}/${noteid}`, subheadingdata); //not working properly changing the object of the notes array instead of adding the data to note_data array inside the object
//   }
// }








///////////////////////////////////////////////////////////////


import { Injectable } from '@angular/core';
import { Data, Note } from '../Interfaces/note';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private addsubheadingcard = new BehaviorSubject<boolean>(false);
  addsubheadingcard$ = this.addsubheadingcard.asObservable();

  public activenoteid = new BehaviorSubject<string | undefined>('');
  activenoteid$ = this.activenoteid.asObservable();

  public notes = new BehaviorSubject<Note[]>([]);
  notes$ = this.notes.asObservable();

  private notesarray: Note[] = [];

  private notesUrl = 'http://localhost:3000/notes';

  constructor(private http: HttpClient) { }

  setActiveNoteId(noteId: string | undefined) {
    this.activenoteid.next(noteId);
  }

  toggleAddSubheadingCard(status: boolean) {
    this.addsubheadingcard.next(status);
  }

  addnoteheadingtonotelist(note: Note) {
    return this.http.post<Note>(`${this.notesUrl}`, note).subscribe(newnote => {
      this.notesarray.push(newnote);
      this.notes.next(this.notesarray)
    })
  }

  getnotestonotelist() {
    this.http.get<Note[]>(this.notesUrl).subscribe(notes => {
      this.notesarray = notes;
      this.notes.next(this.notesarray)
    })
  }

  getsinglesubheadingnote(noteid: string | null, subheadingnoteid: string | null) {
    const url = `${this.notesUrl}/${noteid}`;
    return this.http.get<Note>(url)
  }

  deletenotefromnotelist(id: string | undefined) {
    const url = `${this.notesUrl}/${id}`
    this.http.delete<void>(url).subscribe((response) => {
      this.notesarray = this.notesarray.filter((note) => note.id !== id);
      this.notes.next([...this.notesarray]);
    })
  }

  editnoteheadingfromnotelist(
    id: string | undefined,
    updatednoteheading: object
  ): Observable<string> {
    const url = `${this.notesUrl}/${id}`;
    return this.http.put<string>(url, updatednoteheading);
  }

  addsubheading(note_id: string | undefined, newSubheading: Data) {
    const noteIndex = this.notesarray.findIndex(note => note.id === note_id);
    console.log(noteIndex + "index")
    if (noteIndex !== -1) {
      if (!this.notesarray[noteIndex].note_data) {
        this.notesarray[noteIndex].note_data = [];
      }
      this.notesarray[noteIndex].note_data!.push(newSubheading);
      this.http.put<Note>(`${this.notesUrl}/${this.notesarray[noteIndex].id}`, this.notesarray[noteIndex]).subscribe(updatedNote => {
        this.notesarray[noteIndex] = updatedNote;
        this.notes.next(this.notesarray);
      });
    }
  }

  deletesubnote(noteid: string | undefined, subnoteid: string | undefined) {
    if (noteid && subnoteid) {
      const noteindex = this.notesarray.findIndex(note => note.id === noteid);
      if (noteindex !== -1) {
        const note = this.notesarray[noteindex];
        if (note.note_data) {
          // Remove the specific subnote
          note.note_data = note.note_data.filter(subnote => subnote.id !== subnoteid);
  
          // Update the note on the server
          this.http.put<Note>(`${this.notesUrl}/${noteid}`, note).subscribe((updatednote) => {
            // Update the local array and notify subscribers
            this.notesarray[noteindex] = updatednote;
            this.notes.next([...this.notesarray]);
          }); 
        }
      }
    }
  }
  

  updatesubnote(noteid: string | undefined, subnoteid: string | undefined, subheading: string, subcontent: string) {
    if (noteid && subnoteid) {
      const noteindex = this.notesarray.findIndex(note => note.id === noteid);
      if (noteindex !== -1) {
        const note = this.notesarray[noteindex];
        const subnoteindex = note.note_data?.findIndex(subnote => subnote.id === subnoteid);
        if (subnoteindex !== undefined && subnoteindex !== -1) {
          const subnote = note.note_data![subnoteindex];
          subnote.note_data_subheading = subheading;
          subnote.note_data_content = subcontent;
        }
        this.http.put<Note>(`${this.notesUrl}/${noteid}`, note).subscribe((updatednote) => {
          this.notesarray[noteindex] = updatednote;
          this.notes.next(this.notesarray);

        })
      }

    }
  }

  pintask(noteid: string | undefined, subnoteid: string | undefined) {
    const noteindex = this.notesarray.findIndex(note => note.id === noteid);
    const note = this.notesarray[noteindex];
    const subnoteindex = note.note_data?.findIndex(subnote => subnote.id === subnoteid);
    if (subnoteindex !== undefined && subnoteindex !== -1) {

      const subnote = note.note_data![subnoteindex];
      console.log(subnote);
      console.log(subnote);
      console.log(subnote + " after true");
      
      if (!subnote.note_pinned) {
        subnote.note_originalindex = subnoteindex;
      }

      subnote.note_pinned = !subnote.note_pinned;

      if (subnote.note_pinned) {
        // If pinned, move the subnote to the start of the array
        note.note_data?.splice(subnoteindex, 1); // Remove from the current position
        note.note_data?.unshift(subnote); // Add to the start
      } else {
        // If unpinned, move the subnote back to its original position
        note.note_data?.splice(subnoteindex, 1); // Remove from the current position
        note.note_data?.splice(subnote.note_originalindex!, 0, subnote); // Insert at the original position
        delete subnote.note_originalindex; // Remove the originalIndex property as it's no longer needed
      }

    }
    return this.http.put(`${this.notesUrl}/${noteid}`, note).subscribe(updatednote => {
      console.log(JSON.stringify(updatednote) + " updated note")
    })
  }

  // not implemented further functionality for bookmark 
  bookmarkcard(noteid: string | undefined, subnoteid: string | undefined) {
    const noteindex = this.notesarray.findIndex(note => note.id === noteid);
    const note = this.notesarray[noteindex];
    const subnoteindex = note.note_data?.findIndex(subnote => subnote.id === subnoteid);
    if (subnoteindex !== undefined && subnoteindex !== -1) {

      const subnote = note.note_data![subnoteindex];
      console.log(subnote);
      console.log(subnote);
      subnote.note_bookmarked = !subnote.note_bookmarked;
      console.log(subnote +" after true");

    }
    return this.http.put(`${this.notesUrl}/${noteid}`, note).subscribe(updatednote => {
      console.log(JSON.stringify(updatednote) + " updated note");
    })
  }

}

