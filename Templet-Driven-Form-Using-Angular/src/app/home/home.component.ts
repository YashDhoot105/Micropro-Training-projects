import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

   showsidebar() {
    const element = document.querySelector(".sidebar");
    if (element) {
      (element as HTMLElement).style.display = 'flex';
    } else {
      console.error(`Element with selector not found.`);
    }
  }

  hidesidebar() {
    const element = document.querySelector(".sidebar");
    if (element) {
      (element as HTMLElement).style.display = 'none';
    } else {
      console.error(`Element with selector not found.`);
    }
  }
  

  // sidebarVisible: boolean = false;

  // toggleSidebar() {
  //   this.sidebarVisible = !this.sidebarVisible;
  //   const laptopNavbar = document.querySelector(".laptop-navbar") as HTMLElement;
  //   laptopNavbar.style.display = this.sidebarVisible ? 'none' : 'flex';
  // }

  // hideSidebar() {
  //   this.sidebarVisible = false;
  // }

}
