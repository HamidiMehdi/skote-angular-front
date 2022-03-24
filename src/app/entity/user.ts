export class User {

  private _id: number
  private _firstname: string
  private _lastname: string
  private _email: string
  private _createdAt: Date
  private _updatedAt: Date

  constructor(id: number, firstname: string, lastname: string, email: string, createdAt: Date, updatedAt: Date) {
    this._id = id;
    this._firstname = firstname;
    this._lastname = lastname;
    this._email = email;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  public get id(): number {
    return this._id;
  }

  public get firstname(): string {
    return this._firstname;
  }

  public set firstname(value: string) {
    this._firstname = value;
  }

  public get lastname(): string {
    return this._lastname;
  }

  public set lastname(value: string) {
    this._lastname = value;
  }

  public get email(): string {
    return this._email;
  }

  public set email(value: string) {
    this._email = value;
  }

  public get createdAt(): Date {
    return this._createdAt;
  }

  public set createdAt(value: Date) {
    this._createdAt = value;
  }

  public get updatedAt(): Date {
    return this._updatedAt;
  }

  public set updatedAt(value: Date) {
    this._updatedAt = value;
  }
}
