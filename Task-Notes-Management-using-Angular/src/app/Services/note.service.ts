import { Injectable } from '@angular/core';
import { Note } from '../Interfaces/note';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  constructor(private http:HttpClient) { }

  private notesUrl = "http://localhost:3000/notes";

  addnoteheadingtonotelist(noteheading: string){
  return this.http.post(`${this.notesUrl}`, noteheading);

  }

}
