import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { User } from '../../Interfaces/user';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerform: FormGroup;

  constructor(private authservice: AuthService, private router: Router) {
    this.registerform = new FormGroup({
      register_email: new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      register_username: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25),
      ]),
      register_password: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
      ]),
      register_confirmpassword: new FormControl('', [Validators.required]),
    });
  }

  register() {
    console.log('yash');
    if (this.registerform.valid) {
      console.log('Form submitted:', this.registerform.value);
      const postdata = { ...this.registerform.value };
      delete postdata.register_confirmpassword;
      this.authservice.registercurrentuser(postdata as User).subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );

      this.router.navigate(['/login']); 
      // Implement register logic here
    } else {
      console.error('Form is invalid');
      // Optionally handle invalid form state
    }
  }
  ngOnInit(): void {}
}
