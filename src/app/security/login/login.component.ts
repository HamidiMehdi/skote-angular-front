import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth/auth.service";
import {User} from "../../entity/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public form: { email: string, password: string } = {email: '', password: ''}
  public formError: { email: string, password: string } = {email: '', password: ''}
  public formSubmited: boolean = false
  public userNotFound: boolean = false

  constructor(private titleService: Title, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Skote | Authentification')
  }

  public showPassword(input: HTMLInputElement): void {
    if (input.type === 'password') {
      input.type = 'input';
      return;
    }

    input.type = 'password';
  }

  public onSubmit(form: NgForm) {
    this.form = {email: form.value.email, password: form.value.password}
    this.userNotFound = false
    if (this.formIsValid()) {
      this.formSubmited = true;
      this.authService.login(this.form.email, this.form.password).subscribe((user: User) => {
          console.log(user)
          this.formSubmited = false;
        }, (error) => {
          if (error.status === 401) {
            this.userNotFound = true
          }
          this.formSubmited = false;
        }
      )
    }
  }

  private formIsValid(): boolean {
    this.formError = {email: '', password: ''};
    if (!this.form.email) {
      this.formError.email = 'Ce champs est requis';
    } else if (!this.form.email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9]{2,}$/)) {
      this.formError.email = 'Cet email n\'est pas valide';
    }
    if (!this.form.password) {
      this.formError.password = 'Ce champs est requis';
    }

    if (!this.formError.email && !this.formError.password) {
      return true;
    }

    return false;
  }

}
