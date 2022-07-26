import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';

import { User } from '../entities/user.entity';

@Injectable()
export class UserRepository {
    constructor(@InjectRepository(User) private repository: Repository<User>) {}

    async findAll(): Promise<User[]> {
        return await this.repository.find();
    }

    async create(model: User): Promise<User> {
        return await this.repository.save(model);
    }

    async remove(id: string): Promise<DeleteResult> {
        return await this.repository.delete(id);
    }
}
