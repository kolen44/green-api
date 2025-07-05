import { Module } from '@nestjs/common';
import { GreenApiService } from './green-api.service';
import { GreenApiController } from './green-api.controller';

@Module({
  controllers: [GreenApiController],
  providers: [GreenApiService],
})
export class GreenApiModule {}
