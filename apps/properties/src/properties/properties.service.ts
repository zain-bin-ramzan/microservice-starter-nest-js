import { Injectable } from '@nestjs/common';

import { CreatePropertyDto } from '@app/contracts/properties';
import { UpdatePropertyDto } from '@app/contracts/properties';
import { PropertyDto } from '@app/contracts/properties';

const MOCK_PROPERTIES: PropertyDto[] = [
  {
    _id: 1,
    name: 'Property 1',
    description: 'Description 1',
    price: 1000,
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    _id: 2,
    name: 'Property 2',
    description: 'Description 2',
    price: 2000,
    bedrooms: 3,
    bathrooms: 2,
  },
];
@Injectable()
export class PropertiesService {
  create(createPropertyDto: CreatePropertyDto) {
    const newProperty = {
      _id: MOCK_PROPERTIES.length + 1,
      ...createPropertyDto,
    };
    MOCK_PROPERTIES.push(newProperty);
    return newProperty;
  }

  findAll() {
    return MOCK_PROPERTIES;
  }

  findOne(id: number) {
    const property = MOCK_PROPERTIES.find((property) => property._id === id);
    if (!property) {
      return null;
    }
    return property;
  }

  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    const property = MOCK_PROPERTIES.find((property) => property._id === id);
    if (!property) {
      return null;
    }
    const updatedProperty = {
      ...property,
      ...updatePropertyDto,
    };
    MOCK_PROPERTIES[id - 1] = updatedProperty;
    return updatedProperty;
  }

  remove(id: number) {
    const propertyIndex = MOCK_PROPERTIES.findIndex(
      (property) => property._id === id,
    );
    if (propertyIndex === -1) {
      return null;
    }
    const removedProperty = MOCK_PROPERTIES.splice(propertyIndex, 1);
    return removedProperty[0];
  }
}
