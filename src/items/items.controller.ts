import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAllAuctionItemWithPagination() {
    return this.itemsService.findAllAuctionItem();
  }

  @Get(':id')
  findItemWithId(@Param('id') id: string) {
    return this.itemsService.findItem(+id);
  }

  
  @Post()
  createNewAuctionItem(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.createAuctionItem(createItemDto);
  }

  @Put(':id')
  updateAuctionItem(@Param('id') id: string, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.updateAuctionItem(+id, updateItemDto);
  }

  @Delete(':id')
  removeAuctionItem(@Param('id') id: string) {
    return this.itemsService.removeAuctionItem(+id);
  }
}
