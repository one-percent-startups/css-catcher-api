import { Module } from '@nestjs/common';
import { ElementsService } from './elements.service';
import { ElementsController } from './elements.controller';
import { Element, ElementSchema } from './schema/element.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature(
      [{ name: Element.name, schema: ElementSchema }],
      'elements',
    ),
  ],
  controllers: [ElementsController],
  providers: [ElementsService],
})
export class ElementsModule {}
