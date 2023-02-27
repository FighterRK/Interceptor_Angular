import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'interceptor-app';

  //
  userData : any;

  constructor(public api_Service: ApiService) {
    this.getUserDetails()
   }

   

  getUserDetails(){
    this.api_Service.getUserDetails().subscribe(res => {
      console.log(res);

  

      this.userData = res ;

    })
  }


  ngOnInit() {

   


  

  }
}
