import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountsService } from '../accounts/account.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private accountsService: AccountsService,
    private jwtUtility: JwtService,
  ) {}

  async verifyUser(user: string, pwd: string): Promise<any> {
    const account = this.accountsService.getAll().find((acct) => acct.user === user);
    if (account && account.password === pwd) {
      const { password, ...details } = account;
      return details;
    }
    return null;
  }

  async signin(account: any) {
    const tokenPayload = { user: account.user, id: account.id, role: account.role };
    return {
      token: this.jwtUtility.sign(tokenPayload),
    };
  }
}
