import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AccountsModule } from '../accounts/accounts.module';
import { AuthenticationService } from './auth.service';
import { JwtAuthStrategy } from './jwt.strategy';
import { AuthenticationController } from './auth.controller';

@Module({
  imports: [
    AccountsModule,
    PassportModule,
    JwtModule.register({
      secret: 'keySecret',
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [AuthenticationController],
  providers: [AuthenticationService, JwtAuthStrategy],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
