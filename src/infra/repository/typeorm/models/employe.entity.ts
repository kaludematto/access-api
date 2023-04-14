import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { IEmploye } from './dto/IEmploye';

@Entity()
export class Employe implements IEmploye {
    @PrimaryGeneratedColumn()
    id?: number | undefined;

    @Column({ nullable: true })
    name!: string;

    @Column({ nullable: true })
    password!: string;

    @Column({ nullable: true })
    document!: string;

    @Column({ nullable: true })
    picture!: string;

    @Column({ nullable: true })
    email!: string;

    @Column({ nullable: true })
    phone!: string;

    @Column({ nullable: true })
    address!: string;

    @Column({ nullable: true })
    city!: string;

    @Column({ nullable: true })
    state!: string;

    @Column({ nullable: true })
    country!: string;

    @Column({ nullable: true })
    cep!: string;

    @Column({ nullable: true })
    job!: string;

    @Column({ nullable: true })
    company!: string;

    @Column({ nullable: true })
    active!: boolean;

    @CreateDateColumn()
    created_at?: Date | undefined;

    @UpdateDateColumn()
    updated_at?: Date | undefined;
}
