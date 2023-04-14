import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { IUser } from '../../dto/IUser';

@Entity('users')
export class User implements IUser {
    @PrimaryGeneratedColumn()
    id?: number | undefined;

    @Column({ nullable: true })
    name!: string;

    @Column({ nullable: true })
    email!: string;

    @Column({ nullable: true })
    password!: string;

    @Column({ nullable: true })
    document!: string;

    @Column({ nullable: true })
    picture!: string;

    @Column({ nullable: true })
    phone!: string;

    @Column({ nullable: true })
    job!: string;

    @Column({ nullable: true })
    can_approve!: boolean;

    @Column({ nullable: true })
    auth!: string;

    @CreateDateColumn()
    created_at?: Date | undefined;

    @UpdateDateColumn()
    updated_at?: Date | undefined;
}
