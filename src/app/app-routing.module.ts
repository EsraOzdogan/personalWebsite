import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { CreateCvComponent } from './components/pages/create-cv/create-cv.component';
import { CvComponent } from './components/pages/cv/cv.component';
import { HomeComponent } from './components/pages/home/home.component';
import { TemplateComponent } from './components/pages/template/template.component';
import { ResumeComponent } from './components/resume/resume.component';

const routes: Routes = [
  {path:"", pathMatch : "full", component: HomeComponent},
  {path:"about", component: AboutComponent},
  {path:"resume", component: ResumeComponent},
  {path:"create-cv", component: CreateCvComponent},
  {path:"template", component: TemplateComponent},
  {path:"cv", component: CvComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
