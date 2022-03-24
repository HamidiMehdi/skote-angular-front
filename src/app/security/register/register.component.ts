import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Skote | Inscription')
  }

}
