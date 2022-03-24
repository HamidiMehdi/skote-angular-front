import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {catchError, map, Observable} from "rxjs";
import {Token} from "../../entity/token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  public login(email: string, password: string): Observable<Token> {
    return this.http
      .post(environment.api + '/login', {username: email, password: password})
      .pipe(
        map((response: any) => new Token(response.token, response.refresh_token))
      )
  }

  public register(lastname: string, firstname: string, email: string, password: string) {
    return this.http.post(environment.api + '/users', {
      lastname: lastname,
      firstname: firstname,
      email: email,
      password: password,
      userFrom: 'app'
    })
  }

  public me(token: string | null): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Authorization': 'Bearer ' + token,
      'Accept': 'application/ld+json'
    });

    return this.http.get(environment.api + '/me', {
      headers: headers
    })
  }
}
