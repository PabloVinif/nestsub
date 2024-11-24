import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ItemsService, Item } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() createItemDto: Partial<Item>) {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.itemsService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateItemDto: Partial<Item>) {
    return this.itemsService.update(Number(id), updateItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.itemsService.delete(Number(id));
  }
}
