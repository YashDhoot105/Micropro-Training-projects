import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { User } from '../../Interfaces/user';
import { response } from 'express';

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

  constructor( private authservice: AuthService) {
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
    console.log("yash")
    if (this.registerform.valid) {
      console.log('Form submitted:', this.registerform.value);
      const postdata = {...this.registerform.value};
      delete postdata.confrimpassword;
      this.authservice.registercurrentuser(postdata as User).subscribe(
        response => console.log(response),error => console.log(error)
      )
      // Implement register logic here
    } else {
      console.error('Form is invalid');
      // Optionally handle invalid form state
    }
  }
  ngOnInit(): void {}
}
