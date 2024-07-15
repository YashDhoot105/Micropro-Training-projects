import { Component } from '@angular/core';
import { NotelistsubheadingcardsComponent } from '../notelistsubheadingcards/notelistsubheadingcards.component';

@Component({
  selector: 'app-notelistbody',
  standalone: true,
  imports: [NotelistsubheadingcardsComponent],
  templateUrl: './notelistbody.component.html',
  styleUrl: './notelistbody.component.css'
})
export class NotelistbodyComponent {

}
