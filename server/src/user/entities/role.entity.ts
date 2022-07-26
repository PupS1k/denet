import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
    @PrimaryGeneratedColumn() id: string;
    @Column({ default: 0 }) value: number;
}
