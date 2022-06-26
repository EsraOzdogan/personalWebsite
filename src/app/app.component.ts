import { Component, OnInit } from '@angular/core';
import { User } from './models/user';
import { FirebaseService } from './services/firebase.service';
import { GetUserData } from './models/getUserData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user = GetUserData;
  //user : User;
  
  //public users: Array<any> = [];
  constructor ( private firebaseService : FirebaseService){}
 
  ngOnInit(): void{
     this.firebaseService.getUser("esra")
     //console.log(this.user)
     //this.firebaseService.getNav();
    debugger

  }
  title = 'portfolio';
}
