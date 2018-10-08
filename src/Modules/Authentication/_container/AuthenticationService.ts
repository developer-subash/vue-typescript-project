import { injectable } from "inversify";

@injectable()
class AuthenticationService {
  constructor() {}

  addUser() {
    return "hello suabsh from";
  }
}
export const authService = new AuthenticationService();
