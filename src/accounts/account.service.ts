import { Injectable } from '@nestjs/common';

export interface Account {
  id: number;
  name: string;
  secret: string;
  privilege: string;
}

@Injectable()
export class AccountsService {
  private accounts: Account[] = [];
  private idSequence = 1;

  create(account: Partial<Account>): Account {
    const newAccount = { id: this.idSequence++, privilege: 'basic', ...account } as Account;
    this.accounts.push(newAccount);
    return newAccount;
  }

  findAll(): Account[] {
    return this.accounts;
  }

  findOne(id: number): Account | undefined {
    return this.accounts.find((account) => account.id === id);
  }

  update(id: number, updateAccount: Partial<Account>): Account | null {
    const account = this.findOne(id);
    if (!account) return null;

    Object.assign(account, updateAccount);
    return account;
  }

  delete(id: number): boolean {
    const index = this.accounts.findIndex((account) => account.id === id);
    if (index === -1) return false;

    this.accounts.splice(index, 1);
    return true;
  }
}
