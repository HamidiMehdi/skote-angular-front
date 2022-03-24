export class Token {

  private token: string
  private refreshToken: string

  constructor(token: string, refreshToken: string) {
    this.token = token
    this.refreshToken = refreshToken
  }

  getToken(): string {
    return this.token
  }

  setToken(token: string): void {
    this.token = token;
  }

  getRefreshToken(): string {
    return this.refreshToken
  }

  setRefreshToken(refreshToken: string): void {
    this.refreshToken = refreshToken;
  }
}
