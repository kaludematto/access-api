import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { ICompany } from './dto/ICompany';

@Entity()
export class Company implements ICompany {
    @PrimaryGeneratedColumn()
    id?: number | undefined;

    @Column({ nullable: true })
    company_name!: string;

    @Column({ nullable: true })
    cnpj!: number;

    @Column({ nullable: true })
    phone!: string;

    @Column({ nullable: true })
    email!: string;

    @Column({ nullable: true })
    floor!: string;

    @Column({ nullable: true })
    room!: string;

    @Column({ nullable: true })
    responsable!: string;

    @CreateDateColumn()
    created_at?: Date | undefined;

    @UpdateDateColumn()
    updated_at?: Date | undefined;
}
