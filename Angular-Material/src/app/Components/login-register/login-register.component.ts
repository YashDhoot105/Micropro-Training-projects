import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { Router, RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login-register',
  standalone: true,
  imports: [MatTabsModule, CommonModule, RouterModule, ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatButtonModule,FormsModule],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css'
})
export class LoginRegisterComponent {
  loginform: FormGroup;

  constructor(private router: Router) {
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

  login(){}
}
