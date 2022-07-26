import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

import { Role } from './role.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn() id: string;
    @Column() username: string;

    @ManyToMany(() => Role)
    @JoinTable()
    roles: Role[];
}