import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GreenApiModule } from './green-api/green-api.module';

@Module({
  imports: [GreenApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
