import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { GeometryModule } from './geometry/geometry.module';
import { ShopModule } from './shop/shop.module';
import { HealtModule } from './healt/healt.module';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'toko-buku-api',
    }),
    BooksModule,
    GeometryModule,
    ShopModule,
    HealtModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
