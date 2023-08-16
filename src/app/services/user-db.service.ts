import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDbService {
  users: User[] = [];

  constructor() {}

  adUsers(user: User) {
    this.users.push(user);
  }

  getUsers() {
    return this.users;
  }
}

interface User {
  name: string;
  email: string;
  age: number;
}
