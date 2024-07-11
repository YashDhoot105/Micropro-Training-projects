import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { OnewaybindingService } from '../onewaybinding.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


export class HomeComponent {
  // name: string = '';
  // constructor(public onewaybinging: OnewaybingingService) {

  //   this.onewaybinging.name.subscribe((name: string) => {
  //     this.name = name;
  //   })

  //   setTimeout(() => {
  //     // this.name = "rupesh";
  //   }, 3000);
  // }

  // changename(name: string) {
  //   // this.name = name;


  // }

  userloggedin:boolean=false;
  userloginform:any={}



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
