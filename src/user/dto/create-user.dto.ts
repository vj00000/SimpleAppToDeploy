export class CreateUserDto {
    readonly username: string;
    readonly password: string;
    readonly email: string;
    readonly role: string;
  
    constructor(username: string, password: string, email: string, role:string) {
      this.username = username;
      this.password = password;
      this.email = email;
      this.role = role;
    }
  }