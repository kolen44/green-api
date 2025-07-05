import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GreenApiResolver } from './green-api/green-api.resolver';
import { GreenApiModule } from './green-api/green-api.module';

@Module({
  imports: [GreenApiModule],
  controllers: [AppController],
  providers: [AppService, GreenApiResolver],
})
export class AppModule {}
