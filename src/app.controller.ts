import { Controller, Get } from '@nestjs/common';
import { readFileSync } from 'fs';
import { join } from 'path';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAnimations(): string {
    const mapDir = join(__dirname, '../static/pages/green-api.html');

    return readFileSync(mapDir, 'utf8');
  }
}
