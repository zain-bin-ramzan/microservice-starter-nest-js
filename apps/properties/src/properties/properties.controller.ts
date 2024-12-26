import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

import { CreatePropertyDto } from '@app/contracts/properties';
import { UpdatePropertyDto } from '@app/contracts/properties';
import { PROPERTY_PATTERN } from '@app/contracts/properties';

import { PropertiesService } from './properties.service';

@Controller()
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @MessagePattern(PROPERTY_PATTERN.CREATE)
  create(@Payload() createPropertyDto: CreatePropertyDto) {
    return this.propertiesService.create(createPropertyDto);
  }

  @MessagePattern(PROPERTY_PATTERN.FIND_ALL)
  findAll() {
    return this.propertiesService.findAll();
  }

  @MessagePattern(PROPERTY_PATTERN.FIND_ONE)
  findOne(@Payload() id: number) {
    return this.propertiesService.findOne(id);
  }

  @MessagePattern(PROPERTY_PATTERN.UPDATE)
  update(@Payload() updatePropertyDto: UpdatePropertyDto) {
    return this.propertiesService.update(
      updatePropertyDto.id,
      updatePropertyDto,
    );
  }

  @MessagePattern(PROPERTY_PATTERN.REMOVE)
  remove(@Payload() id: number) {
    return this.propertiesService.remove(id);
  }
}
