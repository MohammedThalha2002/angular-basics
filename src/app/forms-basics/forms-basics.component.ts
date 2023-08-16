import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-basics',
  templateUrl: './forms-basics.component.html',
  styleUrls: ['./forms-basics.component.css'],
})
export class FormsBasicsComponent {
  @ViewChild('forms') forms: NgForm | undefined;
  formsValue: User = {
    name: '',
    email: '',
    age: 0,
  };
  isSubmitted: boolean = false;

  onSubmit() {
    this.isSubmitted = true
    console.log(this.forms);
    this.formsValue = {
      name: this.forms?.value['name'],
      email: this.forms?.value['email'],
      age: this.forms?.value['age'],
    };
    console.log(this.formsValue);
    this.forms?.reset();
  }
}

interface User {
  name: string;
  email: string;
  age: number;
}
