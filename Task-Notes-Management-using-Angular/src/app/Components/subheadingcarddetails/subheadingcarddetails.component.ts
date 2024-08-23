import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NoteService } from '../../Services/note.service';
import { Data, Note } from '../../Interfaces/note';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subheadingcarddetails',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './subheadingcarddetails.component.html',
  styleUrls: ['./subheadingcarddetails.component.css']
})
export class SubheadingcarddetailsComponent implements OnInit {
  activenote: Data | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private noteService: NoteService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const noteId = paramMap.get('id');
      const subheadingNoteId = paramMap.get('subheadingnoteid');

      if (noteId && subheadingNoteId) {
        this.noteService.getsinglesubheadingnote(noteId, subheadingNoteId)
          .subscribe(note => {
            if (note.note_data) {
              this.activenote = note.note_data.find(
                (data: Data) => data.id === subheadingNoteId
              );
              console.log(this.activenote);
            }
          });
      }
    });
  }
}
