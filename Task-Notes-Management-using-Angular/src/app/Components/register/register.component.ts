import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerform: FormGroup;
  // isloggingin: boolean = false;

  constructor() {
    this.registerform = new FormGroup({
      register_email: new FormControl('',[Validators.required, Validators.email]),
      register_username: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25),
      ]),
      register_password: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      register_confirmpassword: new FormControl('',[Validators.required])
    });
  }

  register() {
    if (this.registerform.valid) {
      console.log('Form submitted:', this.registerform.value);
      // Implement register logic here
    } else {
      console.error('Form is invalid');
      // Optionally handle invalid form state
    }
  }
  ngOnInit(): void {}
}
