import { Injectable } from '@nestjs/common';
import { CreateSocketModuleDto } from './dto/create-socket-module.dto';
import { UpdateSocketModuleDto } from './dto/update-socket-module.dto';

@Injectable()
export class SocketModuleService {
  create(createSocketModuleDto: CreateSocketModuleDto) {
    return 'This action adds a new socketModule';
  }

  findAll() {
    return `This action returns all socketModule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} socketModule`;
  }

  update(id: number, updateSocketModuleDto: UpdateSocketModuleDto) {
    return `This action updates a #${id} socketModule`;
  }

  remove(id: number) {
    return `This action removes a #${id} socketModule`;
  }
}
