import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OnewaybindingService } from '../onewaybinding.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  @Input('display-name') displayName: string = '';
  @Output() output_event: EventEmitter<string> = new EventEmitter();
  constructor(public onewaybinging: OnewaybindingService) {}
  changevalue() {
    this.onewaybinging.name.next('zcv');
  }

  showsidebar() {
    const element = document.querySelector('.sidebar');
    if (element) {
      (element as HTMLElement).style.display = 'flex';
    } else {
      console.error(`Element with selector not found.`);
    }
  }

  hidesidebar() {
    const element = document.querySelector('.sidebar');
    if (element) {
      (element as HTMLElement).style.display = 'none';
    } else {
      console.error(`Element with selector not found.`);
    }
  }
}
