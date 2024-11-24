import { Module } from '@nestjs/common';
import { RootController } from './root.controller';
import { RootService } from './root.service';
import { AccountsModule } from './accounts/accounts.module';
import { ItemsModule } from './items/items.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AccountsModule, ItemsModule, AuthModule],
  controllers: [RootController],
  providers: [RootService],
})
export class RootModule {}
