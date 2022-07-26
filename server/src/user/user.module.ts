import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Role } from './entities/role.entity';
import { User } from './entities/user.entity';
import { UserController } from './controllers/user.controller';
import { UserRepository } from './repositories/user.repository';

@Module({
    imports: [TypeOrmModule.forFeature([Role, User])],
    providers: [UserRepository],
    controllers: [UserController],
    exports: [TypeOrmModule]
})
export class UserModule {}
