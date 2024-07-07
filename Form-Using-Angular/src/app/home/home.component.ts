import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

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
