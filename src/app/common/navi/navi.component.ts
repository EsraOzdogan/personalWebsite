import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  nav;
  constructor(public db: AngularFireDatabase) { }

  ngOnInit(): void {
   this.getNav()
    console.log(this.nav)
  }

  getNav(){
    this.db.list("nav")
    .valueChanges()
    .subscribe(res => {
      this.nav = res;
    });
  }


}
