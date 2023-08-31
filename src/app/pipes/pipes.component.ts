import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {


    constructor(private dataService : DataServiceService){

    }

    values! : Observable<User[]>;

    ngOnInit(): void {
        this.values = this.dataService.getDetails();
    }
  

    birthDay = new Date(2002,9-1,22)
}


interface User {
  name: string;
  email: string;
  age: number;
}
