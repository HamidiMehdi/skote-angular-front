export class Token {

  private _token: string
  private _refreshToken: string

  constructor(token: string, refreshToken: string) {
    this._token = token
    this._refreshToken = refreshToken
  }

  public get token(): string {
    return this._token;
  }

  public set token(value: string) {
    this._token = value;
  }

  public get refreshToken(): string {
    return this._refreshToken;
  }

  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
}
