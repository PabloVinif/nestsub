import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AccountsService, Account } from './account.service';

@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  create(@Body() createAccountDto: Partial<Account>) {
    return this.accountsService.create(createAccountDto);
  }

  @Get()
  findAll() {
    return this.accountsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.accountsService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateAccountDto: Partial<Account>) {
    return this.accountsService.update(Number(id), updateAccountDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.accountsService.delete(Number(id));
  }
}
