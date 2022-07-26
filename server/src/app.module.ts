import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, 'wwwroot'),
            exclude: ['/api*']
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'test',
            synchronize: true
        }),
        UserModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
