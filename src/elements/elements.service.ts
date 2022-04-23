import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateElementDto } from './dto/create-element.dto';
import { UpdateElementDto } from './dto/update-element.dto';
import { Element, ElementDocument } from './schema/element.schema';
import { Model } from 'mongoose';

@Injectable()
export class ElementsService {
  constructor(
    @InjectModel(Element.name) private element: Model<ElementDocument>,
  ) {}

  async create(createElement: CreateElementDto): Promise<Element> {
    console.log('element create', createElement);
    try {
      const element = await this.element.create(createElement);
      return element;
    } catch (e) {
      throw new HttpException(`Error: ${e}`, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  findAll() {
    return `This action returns all elements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} element`;
  }

  update(id: number, updateElementDto: UpdateElementDto) {
    return `This action updates a #${id} element`;
  }

  remove(id: number) {
    return `This action removes a #${id} element`;
  }
}
