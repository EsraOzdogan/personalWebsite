import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  img = "/src/assets/img/cvtemplate.png"
  constructor() { }

  ngOnInit(): void {
  }

}
