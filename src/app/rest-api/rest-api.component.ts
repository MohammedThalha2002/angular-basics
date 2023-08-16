import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-rest-api',
  templateUrl: './rest-api.component.html',
  styleUrls: ['./rest-api.component.css'],
})
export class RestApiComponent {
  constructor(private http: HttpClient) {}

  data: Data[] = [];

  readonly BASE_URL: string = 'https://jsonplaceholder.typicode.com';

  getAllData() {
    this.http
      .get<Data[]>(this.BASE_URL + '/users')
      .subscribe((res) => (this.data = res));
  }

  getDataById(id: number) {
    this.http.get(this.BASE_URL + `/users/${id}`).subscribe((res) => {
      console.log(res);
      this.data = [];
    });
  }

  postData() {}

  sendMail(user: Data) {
    console.log(user);
  }
}

interface Data {
  id: number;
  name: string;
  email: string;
}
