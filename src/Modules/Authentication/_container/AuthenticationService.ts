// import { injectable } from 'inversify';

// @injectable()
class AuthenticationService {
  constructor() {}

  addUser() {
    return "hello from Authentication Class";
  }
}
export const authService = new AuthenticationService();