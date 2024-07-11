import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit{

  // loginform: FormGroup;
  isloggingin:boolean = false;

  // constructor(){
    loginform: FormGroup = new FormGroup ({
      login_username : new FormControl('',[Validators.required,Validators.minLength(2), Validators.maxLength(25)]),
      login_password : new FormControl('', [Validators.required,Validators.minLength(10)]),
    });
  // }

  

  login() {
    console.log(this.loginform.value);
   }

  ngOnInit(): void { }
}



