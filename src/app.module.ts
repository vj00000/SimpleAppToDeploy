import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ItemsModule } from './items/items.module';
import { BidsModule } from './bids/bids.module';
import { DataSource } from 'typeorm';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Database type
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [/* Your entities here */],
      synchronize: true, // Set to false in production!
    }),
    UserModule,
    ItemsModule,
    BidsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource:DataSource){console.log(process.env.POSTGRES_PASSWORD);}
  // constructor(){console.log(process.env.POSTGRES_PASSWORD);}
}
