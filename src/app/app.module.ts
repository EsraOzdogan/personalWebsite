import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideDatabase } from '@angular/fire/database';
import { getDatabase } from 'firebase/database';
import { environment } from 'src/environments/environment';


import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { HttpClientModule } from "@angular/common/http";




import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ResumeComponent } from './components/resume/resume.component';
import { NaviComponent } from './common/navi/navi.component';
import { HomeComponent } from './components/pages/home/home.component';
import { CreateCvComponent } from './components/pages/create-cv/create-cv.component';
import { TemplateComponent } from './components/pages/template/template.component';
import { CvComponent } from './components/pages/cv/cv.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ResumeComponent,
    NaviComponent,
    HomeComponent,
    CreateCvComponent,
    TemplateComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    // provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // provideFirestore(() => getFirestore()),
    // provideDatabase(()=>getDatabase()),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
