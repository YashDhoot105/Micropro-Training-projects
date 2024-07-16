import { Injectable } from '@angular/core';
import { Note } from '../Interfaces/note';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private activenote = new BehaviorSubject<string>('');
  activenote$ = this.activenote.asObservable();

  // currentactivenote(activenote:string){
  //   this.activenote.next(activenote);
  // }
  
  constructor(private http:HttpClient) { }

  private notesUrl = "http://localhost:3000/notes";

  addnoteheadingtonotelist(note: Note){
  return this.http.post(`${this.notesUrl}`, note);
  }

  getnotestonotelist(): Observable<Note[]> {
    return this.http.get<Note[]>(this.notesUrl);
  }

  deletenotefromnotelist(id: string | undefined): Observable<void> {
    const url = `${this.notesUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  editnoteheadingfromnotelist(id: string | undefined, updatednoteheading : object):Observable<string> {
    const url = `${this.notesUrl}/${id}`;
    return this.http.put<string>(url, updatednoteheading);
  }
}
