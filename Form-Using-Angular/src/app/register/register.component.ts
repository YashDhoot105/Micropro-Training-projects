import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
registrationform: FormGroup = new FormGroup({
  username: new FormControl(''),
  password: new FormControl(''),
  confirmedpassword: new FormControl('')
})
registeredformvalue:any;

saveregistereddetails() {
  this.registeredformvalue = this.registrationform.value;
  console.log(this.registeredformvalue)
}
}
