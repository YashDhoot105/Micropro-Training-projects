import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

saveregistereddetails(userregisterationform: any) {
  console.log(userregisterationform);
}
}



////////////////////////////////// Json Server //////////////////////////////////

// import { HttpClient } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [RouterModule,],
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.css'
// })
// export class RegisterComponent implements OnInit {

//   constructor(private _http: HttpClient){}

//   registrationform: FormGroup | any;
//   ngOnInit(): void {
//     this.registrationform = new FormGroup({
//       registered_email: new FormControl(''),
//       registered_username: new FormControl(''),
//       registered_password: new FormControl(''),
//       registered_confirmedpassword: new FormControl('')
//     })
//   }

//   registeredformvalue: any;

//   saveregistereddetails() {
//     this._http.post<any>("http://localhost:3000/login_details", this.registrationform.value)
//     .subscribe(res =>{
//       alert("data added successfully")
//       this.registrationform.reset();
//     })
//     // this.registeredformvalue = this.registrationform.value;
//     // console.log(this.registeredformvalue)
//   }
// }
