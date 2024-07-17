import { Injectable } from '@angular/core';
import { Data, Note } from '../Interfaces/note';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private addsubheading = new BehaviorSubject<boolean>(false);
  addsubheading$ = this.addsubheading.asObservable();

  private activenoteid = new BehaviorSubject<string | undefined>('');
  activenoteid$ = this.activenoteid.asObservable();

  addsubheadingcard(addsubheadingcard:boolean, noteid:string | undefined){
    this.addsubheading.next(addsubheadingcard);
    this.activenoteid.next(noteid);
  }
  
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



  addsubheadingcarddetailstonotes(subheadingdata: Data, noteid:string | undefined){
    return this.http.put(`${this.notesUrl}/${noteid}`, subheadingdata);   //not working properly changing the object of the notes array instead of adding the data to note_data array inside the object
    }
}
