import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  isloggedin = false;                  // this variable is just a local variable and not the one used in auth.service.ts
  username: string = '';

  constructor(private authserice: AuthService){}

  ngOnInit(){
    this.authserice.isLoggedIn$.subscribe( status => {
      this.isloggedin = status;        // Updates local isLoggedIn based on AuthService's status
    })    

    this.authserice.userName$.subscribe(username => {
      this.username = username;
    })
  }

  logout(){
    this.authserice.setloginstatus(false);
  }
}
