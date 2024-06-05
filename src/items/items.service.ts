import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {

  createAuctionItem(reateItemDto){
  }

  findAllAuctionItem() {
    return `This action returns all items`;
  }

  findItem(id: number) {
    return `This action returns a #${id} item`;
  }
  updateAuctionItem(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  removeAuctionItem(id: number) {
    return `This action removes a #${id} item`;
  }
}
