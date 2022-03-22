import {Component, OnInit} from '@angular/core';
import * as ROUTES from '../../routes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  routes = {
    resetPassword: ROUTES.RESET_PASSWORD,
    register: ROUTES.REGISTER
  };

  constructor() {
  }

  ngOnInit(): void {
  }
}
