import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor() {}

  data: Array<User> = [
    { name: 'Mohammed', email: 'thalha@gmail.com', age: 20 },
    { name: 'Thalha', email: 'mohd@gmail.com', age: 20 },
    { name: 'Ali', email: 'ali@gmail.com', age: 34 },
  ];

  getDetails(): Observable<Array<User>> {
    return new Observable((observer) => {
      setInterval(() => {
        observer.next(this.data);
      }, 3000);
    });
  }
}

interface User {
  name: string;
  email: string;
  age: number;
}
