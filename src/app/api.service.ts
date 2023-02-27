import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // SETTING LOADER
  public loading : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)


  constructor(private http : HttpClient) { }

  

  getUserDetails(){
    const data = {
      "userId": 10,
      "id": 100,
      "title": "Hello World",
      "body": "Hello World Hello World"
    }

    

      return this.http.post('https://jsonplaceholder.typicode.com/posts',data,{reportProgress: true})
      
  
    
    
  }
}
