import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import {
  PROPERTY_PATTERN,
  CreatePropertyDto as ClientCreatePropertyDto,
  UpdatePropertyDto as ClientUpdatePropertyDto,
  PropertyDto as ClientPropertyDto,
} from '@app/contracts/properties';
import { map } from 'rxjs';

import { PROPERTIES_CLIENT } from './constants';
import { CreatePropertyDto } from './dtos/create-property.dto';
import { PropertyDto } from './dtos/property.dto';
import { UpdatePropertyDto } from './dtos/update-property.dto';

@Injectable()
export class PropertiesService {
  constructor(
    @Inject(PROPERTIES_CLIENT) private readonly propertiesClient: ClientProxy,
  ) {}
  // first value in send is the response type, second value is the payload type
  /**
   *   we only want to expose the description of the property and id
   **/
  private mapPropertyDto(property: ClientPropertyDto): PropertyDto {
    return {
      id: property._id,
      description: property.description,
    };
  }
  create(createPropertyDto: CreatePropertyDto) {
    return this.propertiesClient
      .send<
        ClientPropertyDto,
        ClientCreatePropertyDto
      >(PROPERTY_PATTERN.CREATE, createPropertyDto)
      .pipe(map(this.mapPropertyDto));
  }

  findAll() {
    return this.propertiesClient.send<ClientPropertyDto[]>(
      PROPERTY_PATTERN.FIND_ALL,
      {},
    );
  }

  findOne(id: number) {
    return this.propertiesClient.send<ClientPropertyDto, number>(
      PROPERTY_PATTERN.FIND_ONE,
      id,
    );
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return this.propertiesClient.send<ClientUpdatePropertyDto>(
      PROPERTY_PATTERN.UPDATE,
      {
        id,
        ...updatePropertyDto,
      },
    );
  }

  remove(id: number) {
    return this.propertiesClient.send<ClientPropertyDto, number>(
      PROPERTY_PATTERN.REMOVE,
      id,
    );
  }
}
