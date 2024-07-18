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

  constructor(private http: HttpClient) {}

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

  deletenotefromnotelist(id: string | undefined) {
    const url = `${this.notesUrl}/${id}`
    this.http.delete<void>(url).subscribe((response) => {
      this.notesarray = this.notesarray.filter((note) => note.id !== id);
      this.notes.next(this.notesarray);
    })
  }

  editnoteheadingfromnotelist(
    id: string | undefined,
    updatednoteheading: object
  ): Observable<string> {
    const url = `${this.notesUrl}/${id}`;
    return this.http.put<string>(url, updatednoteheading);
  }

  addsubheading(note_id: number, newSubheading: Data) {
    const noteIndex = this.notesarray.findIndex(note => note.note_id === note_id);
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
}

