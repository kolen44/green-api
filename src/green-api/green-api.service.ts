import { Injectable } from '@nestjs/common';
import { CreateGreenApiDto } from './dto/create-green-api.dto';
import { UpdateGreenApiDto } from './dto/update-green-api.dto';

@Injectable()
export class GreenApiService {
  create(createGreenApiDto: CreateGreenApiDto) {
    return 'This action adds a new greenApi';
  }

  findAll() {
    return `This action returns all greenApi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} greenApi`;
  }

  update(id: number, updateGreenApiDto: UpdateGreenApiDto) {
    return `This action updates a #${id} greenApi`;
  }

  remove(id: number) {
    return `This action removes a #${id} greenApi`;
  }
}
