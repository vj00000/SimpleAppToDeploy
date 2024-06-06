import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { SocketModuleService } from './socket-module.service';
import { CreateSocketModuleDto } from './dto/create-socket-module.dto';
import { UpdateSocketModuleDto } from './dto/update-socket-module.dto';

@WebSocketGateway()
export class SocketModuleGateway {
  constructor(private readonly socketModuleService: SocketModuleService) {}

  @SubscribeMessage('createSocketModule')
  create(@MessageBody() createSocketModuleDto: CreateSocketModuleDto) {
    return this.socketModuleService.create(createSocketModuleDto);
  }

  @SubscribeMessage('findAllSocketModule')
  findAll() {
    return this.socketModuleService.findAll();
  }

  @SubscribeMessage('findOneSocketModule')
  findOne(@MessageBody() id: number) {
    return this.socketModuleService.findOne(id);
  }

  @SubscribeMessage('updateSocketModule')
  update(@MessageBody() updateSocketModuleDto: UpdateSocketModuleDto) {
    return this.socketModuleService.update(updateSocketModuleDto.id, updateSocketModuleDto);
  }

  @SubscribeMessage('removeSocketModule')
  remove(@MessageBody() id: number) {
    return this.socketModuleService.remove(id);
  }
}
