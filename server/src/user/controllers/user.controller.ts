import { Post, Body, Delete, Param, Controller, Get } from '@nestjs/common';

import { UserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserRepository) {}

    @Get()
    async get() {
        return this.userService.findAll();
    }

    @Post()
    async create(@Body('user') model: User) {
        return this.userService.create(model);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return await this.userService.remove(id);
    }
}
