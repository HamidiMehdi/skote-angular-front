import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {

  constructor(private titleService: Title) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Skote | Récupérer votre mot de passe')
  }

}
