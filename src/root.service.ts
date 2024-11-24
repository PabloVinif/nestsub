import { Injectable } from '@nestjs/common';

@Injectable()
export class RootService {
  getWelcome(): string {
    return 'Welcome!';
  }
}
