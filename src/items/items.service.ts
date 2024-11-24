import { Injectable } from '@nestjs/common';

export interface Item {
  id: number;
  title: string;
  cost: number;
  details: string;
  quantity: number;
}

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  private idSequence = 1;

  create(item: Partial<Item>): Item {
    const newItem = {
      id: this.idSequence++,
      ...item,
    } as Item;
    this.items.push(newItem);
    return newItem;
  }

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: number): Item | undefined {
    return this.items.find((item) => item.id === id);
  }

  update(id: number, updateItemDto: Partial<Item>): Item | null {
    const item = this.findOne(id);
    if (!item) return null;

    Object.assign(item, updateItemDto);
    return item;
  }

  delete(id: number): boolean {
    const index = this.items.findIndex((item) => item.id === id);
    if (index === -1) return false;

    this.items.splice(index, 1);
    return true;
  }
}
