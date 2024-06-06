import { PartialType } from '@nestjs/mapped-types';
import { CreateSocketModuleDto } from './create-socket-module.dto';

export class UpdateSocketModuleDto extends PartialType(CreateSocketModuleDto) {
  id: number;
}
