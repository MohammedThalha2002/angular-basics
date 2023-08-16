import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodosComponent } from './TodoApp/todos/todos.component';
import { TodoComponent } from './TodoApp/todo/todo.component';
import { FormsBasicsComponent } from './forms-basics/forms-basics.component';
import { FirstComponentComponent } from './routing-setup/first-component/first-component.component';
import { SecondComponentComponent } from './routing-setup/second-component/second-component.component';

@NgModule({
  declarations: [AppComponent, TodosComponent, TodoComponent, FormsBasicsComponent, FirstComponentComponent, SecondComponentComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
