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

  // login() {
  //   if (this.loginform.valid) {
  //     console.log('Form submitted:', this.loginform.value);

  //     const username = this.loginform.get('login_username')?.value;
  //     const password = this.loginform.get('login_password')?.value;
  //     console.log(username);
  //     console.log(password);

  //     this.authService.setloginstatus(true, username);

  //     this.authService.getuserbyusername(username as string).subscribe(
  //       (response) => {
  //         console.log(response);
  //         console.log(response[0].password)
  //         if (response && response.length > 0 && response[0].password === password) {
  //           console.log('inside if ');
  //           this.router.navigate(['/navbar']);
  //         } else {
  //           console.error('Incorrect username or password');
  //         }
  //       },
  //       (error) => {
  //         console.error('Error fetching user:', error);
  //       }
  //     );
  //   } else {
  //     console.error('Form is invalid');
  //   }
  // }

  login() {
    if (this.loginform.valid) {
      console.log('Form submitted:', this.loginform.value);

      const username = this.loginform.get('login_username')?.value;
      const password = this.loginform.get('login_password')?.value;
      console.log('Username:', username);
      console.log('Password:', password);

      this.authService.setloginstatus(true, username);

      this.authService.getuserbyusername(username as string).subscribe(
        (response) => {
          console.log('Response from getuserbyusername:', response);

          // Check if response is an array and has at least one element
          // if (Array.isArray(response) && response.length > 0) {
          if (response.length > 0) {
            const user = response[0];
            console.log('User found:', user);
            console.log('Password in database:', user.register_password);

            if (user.register_password === password) {
              console.log('Password match, navigating to /navbar');
              this.router.navigate(['/navbar']);
            } else {
              console.error('Incorrect password');
            }
          } else {
            console.error('User not found');
          }
        },
        (error) => {
          console.error('Error fetching user:', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }

  ngOnInit(): void {}
}
