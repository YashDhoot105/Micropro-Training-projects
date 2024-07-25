import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class GetalluserdataService {

  private userarray: User[] = [];
  public users = new BehaviorSubject<User[]>([]);
  users$ = this.users.asObservable();
  

  private url = 'http://192.168.1.40:8080/bank/findall';

  constructor(private http: HttpClient) { }

  getAllUserData() {
     this.http.get<User[]>(this.url).subscribe(usersArray => {
      this.userarray = usersArray;
       console.log(usersArray);
       console.log(this.userarray);

      this.users.next(this.userarray);
    });
  }
}






// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { User } from '../Interfaces/user';

// @Injectable({
//   providedIn: 'root'
// })
// export class GetalluserdataService {

//   private userarray: User[] = [];
//   public users = new BehaviorSubject<User[]>([]);
//   users$ = this.users.asObservable();

//   public url= 'http://192.168.1.40:8080/bank/findall';
  
//   constructor(private http: HttpClient) { }

//   getalluserdata() {
//     this.http.get<User[]>(this.url).subscribe(usersarray => {
//       this.userarray = usersarray;
//       this.users.next(this.userarray)
//       console.log(usersarray);
//     })
//     }
  
// }
