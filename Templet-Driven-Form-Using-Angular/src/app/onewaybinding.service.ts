import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OnewaybindingService {
 name:BehaviorSubject<string> = new BehaviorSubject("");
 
  constructor() {

   }
}
