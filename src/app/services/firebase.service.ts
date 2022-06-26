import { GetUserData } from './../models/getUserData';
import { Injectable } from '@angular/core';
import { Database, onValue, ref, set, list } from '@angular/fire/database';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { AngularFireDatabase  } from '@angular/fire/compat/database';


import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class  FirebaseService {

  public users: Array<any> = [];
  public nav: Array<any> = [];

  //user : User;

  constructor(public db: AngularFireDatabase/*,public database:Database*/) { }

  // getUser(userName: string) {
  //   const startConfRef = ref(this.database, `users/${userName}`);
  //   onValue(startConfRef, (snapshot) => {
  //     const data: User = snapshot.val();
  //     console.log(data)
  //     GetUserData.email = data.email;
  //     GetUserData.firstName = data.firstName;
  //     GetUserData.lastName = data.lastName;
  //     GetUserData.imageUrl = data.imageUrl;
  //     GetUserData.githubUrl = data.githubUrl;
  //     GetUserData.linkedInUrl = data.linkedInUrl;
  //     GetUserData.mediumUrl = data.mediumUrl;
  //     GetUserData.about = data.about;
  //     GetUserData.title = data.title;
  //     //console.log( data.skills)
  //     GetUserData.skills = data.skills;
    
  //     // GetUserData.skills.html = data.skills;
  //     // GetUserData.skills.name = data.skills.name;

  //     //return snapshot.val();
  //   });

    
 // }

  


  getUser(userName: string) {

    this.db.list(`users/${userName}`)
    .valueChanges()
    .subscribe(res => {
      this.users = res;
     
        GetUserData.about = this.users[0],
        GetUserData.age = this.users[1],
        GetUserData.birthday = this.users[2] 
        GetUserData.city = this.users[3],
        GetUserData.degree = this.users[4],
        GetUserData.email = this.users[5],
        GetUserData.firstName = this.users[6],
        GetUserData.githubUrl = this.users[7],
        GetUserData.imageUrl = this.users[8]
        GetUserData.lastName = this.users[9],
        GetUserData.linkedInUrl = this.users[10],
        GetUserData.mediumUrl = this.users[11],
        GetUserData.phone = this.users[12],

        GetUserData.title = this.users[14],
        GetUserData.education = this.users[5]
        GetUserData.experience = this.users[7]
        GetUserData.skill = this.users[16]

    });


    // this.yiyecekler = af.list("/yiyecekler");
    // this.yiyecekler.snapshotChanges()
    // .pipe(
    //   map(changes =>
    //     changes.map(c => ({ $key: c.payload.key, ...c.payload.val() }))
    //   )
    // ).subscribe((res: any) => {
    //   this.Yiyecekler = res;
    // })

    
  }

  getNav(){
    this.db.list("nav")
    .valueChanges()
    .subscribe(res => {
      this.nav = res;
     
      //console.log(this.nav)
      //GetUserData.about = this.nav[0]
       
    
     
    });
      
  }


  // getUser(userName: string):Observable<User[]> {
  //   const startConfRef = ref(this.database, `users/${userName}`);
  //   onValue(startConfRef, (snapshot) => {
  //     //return snapshot.val();
  //     return this.httpClient.get<User[]>(newPath)
  //   });
  // }

  // getProducts():Observable<Product[]>{
  //   let newPath = this.apiUrl + "/products";
  //   return this.httpClient.get<Product[]>(newPath)
  // }
}