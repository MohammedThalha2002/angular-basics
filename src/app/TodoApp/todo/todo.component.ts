import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserDbService } from 'src/app/services/user-db.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  constructor(private userDbService: UserDbService) {}

  @Input('id') id: number = 0;
  @Input('todo') todo: string = '';

  @Output() deleteEmitter = new EventEmitter<number>();

  addUser() {
    this.userDbService.adUsers({
      name: 'Thalha',
      email: 'thalha@gamil.com',
      age: 10,
    });
  }

  getUsers() {
    console.log(this.userDbService.getUsers());
  }
}
