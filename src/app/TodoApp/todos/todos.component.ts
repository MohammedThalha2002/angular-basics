import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../types/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  @ViewChild('todoForm') form: NgForm | undefined;

  todos: Array<Todo> = [];

  addTodo() {
    this.todos.push({
      id: this.todos.length + 1,
      value: this.form?.value['todo'],
    });

    this.form?.reset();
    console.log(this.todos);
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
