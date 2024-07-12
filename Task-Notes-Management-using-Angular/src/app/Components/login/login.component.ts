import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.loginform = new FormGroup({
      login_username: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25),
      ]),
      login_password: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  login() {
    if (this.loginform.valid) {
      console.log('Form submitted:', this.loginform.value);
      const username = this.loginform.get('login_username')?.value;
      this.authService.setloginstatus(true, username);
      this.router.navigate(['/navbar']); // Navigate to the 'navbar' route
    } else {
      console.error('Form is invalid');
    }
  }
  ngOnInit(): void {}
}
