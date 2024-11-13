import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.loginForm = this.fb.group({
      login_email: ['', [Validators.required, Validators.email]],
      login_password: ['', [Validators.required]]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { login_email, login_password } = this.loginForm.value;
      this.authService.login(login_email, login_password)
        .then(userCredential => {
          console.log('Logged in:', userCredential.user);
        })
        .catch(error => {
          console.error('Login error:', error.message);
        });
    }
  }
}
