import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  isloggingin: boolean = false;

  constructor() {
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
      // Implement login logic here
    } else {
      console.error('Form is invalid');
      // Optionally handle invalid form state
    }
  }
  ngOnInit(): void {}
}
