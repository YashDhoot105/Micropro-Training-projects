import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();

  private userName = new BehaviorSubject<string>('');
  userName$ = this.userName.asObservable();

  setloginstatus(loginstatus: boolean, username?: string){
    this.isLoggedIn.next(loginstatus);
    if(loginstatus){
      this.userName.next(username || '')
    }
    else {
      this.userName.next('');
    }
  }

  constructor() { }
}
