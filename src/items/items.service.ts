import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async createItem(createItemDto): Promise<Item> {
    const newItem = new Item();
    newItem.name = createItemDto.name;
    newItem.description = createItemDto.description;
    newItem.starting_price = createItemDto.starting_price;
    newItem.currentPrice = createItemDto.starting_price;
    newItem.image_url = createItemDto.image_url;
    newItem.endTime = new Date(createItemDto.end_time);
    return await this.itemRepository.save(newItem);
  }

  async findAllItem(): Promise<Item[]> {
    return await this.itemRepository.find();
  }

  async findItemById(id) {
    const itemWithId = await this.itemRepository.findOne(id);
    if (!itemWithId) {
      throw new Error('Item not found'); // Handle item not found error
    }
    return itemWithId;
  }

  async updateItem(id, createItemDto) {
    const itemToUpdate = await this.itemRepository.findOne(id);
    if (!itemToUpdate) {
      throw new Error('Item not found'); // Handle item not found error
    }
    itemToUpdate.name = createItemDto.name;
    itemToUpdate.description = createItemDto.description;
    itemToUpdate.starting_price = createItemDto.starting_price;
    itemToUpdate.currentPrice = createItemDto.starting_price;
    itemToUpdate.image_url = createItemDto.image_url;
    itemToUpdate.endTime = new Date(createItemDto.end_time);
    return await this.itemRepository.save(itemToUpdate);
  }

  async deleteItemById(id: number): Promise<void> {
    await this.itemRepository.delete(id);
  }
}
