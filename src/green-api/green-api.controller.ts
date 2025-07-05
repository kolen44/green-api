import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GreenApiService } from './green-api.service';
import { CreateGreenApiDto } from './dto/create-green-api.dto';
import { UpdateGreenApiDto } from './dto/update-green-api.dto';

@Controller('green-api')
export class GreenApiController {
  constructor(private readonly greenApiService: GreenApiService) {}

  @Post()
  create(@Body() createGreenApiDto: CreateGreenApiDto) {
    return this.greenApiService.create(createGreenApiDto);
  }

  @Get()
  findAll() {
    return this.greenApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.greenApiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGreenApiDto: UpdateGreenApiDto) {
    return this.greenApiService.update(+id, updateGreenApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.greenApiService.remove(+id);
  }
}
