import { Controller, Post, Get, Body, Param, Put, Delete } from '@nestjs/common';
import { ItemService } from './items.service';
import { Item } from './entities/item.entity';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return await this.itemService.findAllItem();
  }
 
  @Get(':id')
  async findOne(@Param('id') id:number){ // Replace with actual return type
    return this.itemService.findItemById(id);
  }


  @Post()
  async createItem(@Body() createItemDto: CreateItemDto): Promise<Item> {
          return await this.itemService.createItem(createItemDto);
  }

  @Put()
  async updateItem(@Param('id') id:number, @Body() createItemDto: CreateItemDto): Promise<Item> {
          return await this.itemService.updateItem(id,createItemDto);
  }

  @Delete()
  async deleteItem(@Param('id') id:number)
  {
    return await this.itemService.deleteItemById(id);
  }
}
