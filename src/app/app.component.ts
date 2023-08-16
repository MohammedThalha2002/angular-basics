import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  gettingSeriveValue: User[] = [];

  // 1
  // Calling a class without initializing the class is called Dependency Injection
  constructor(private appService: AppService) {
    // It is called when the class is being initialized
    console.log('CONSTRUCTOR IS CALLED');
  }

  // 2
  ngOnInit(): void {
    // It is called before the component is rendered
    console.log('ON_INIT IS CALLED');
    this.gettingSeriveValue = this.appService.getDetails();
    console.log(this.gettingSeriveValue);
  }

  // LAST
  ngOnDestroy(): void {
    // It is called after the component is destroyed
    console.log('ON_DESTROY IS CALLED');
  }
}

interface User {
  name: string;
  email: string;
  age: number;
}
