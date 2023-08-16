import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  getDetails(): Array<User> {
    return [
      { name: 'Mohammed', email: 'thalha@gmail.com', age: 20 },
      { name: 'Thalha', email: 'mohd@gmail.com', age: 20 },
      { name: 'Ali', email: 'ali@gmail.com', age: 34 },
    ];
  }
}

interface User {
  name: string;
  email: string;
  age: number;
}
