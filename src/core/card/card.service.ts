import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCardDto, UpdateCardDto } from './dto';

@Injectable()
export class CardService {
  constructor(private readonly client: PrismaService) {}

  async create(data: CreateCardDto) {
    const result = await this.client.card.create({ data: data });
    return result;
  }

  async findById(id: string) {
    const result = await this.client.card.findUnique({
      where: { id: id },
      include: {
        tags: true,
      },
    });
    return result;
  }

  async update(id: string, data: UpdateCardDto) {
    const result = await this.client.card.update({
      where: { id: id },
      data: data,
    });
    return result;
  }
}