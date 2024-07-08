import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  loginform: FormGroup = new FormGroup({
    login_username: new FormControl(''),
    login_password: new FormControl(''),
  });

  loginformValue: any;

  savelogindetails() {
    this.loginformValue = this.loginform.value;
    console.log(this.loginformValue)
  }
}



