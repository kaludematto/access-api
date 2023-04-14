import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { ICompany } from '../../dto/ICompany';

@Entity('company')
export class Company implements ICompany {
    @PrimaryGeneratedColumn('uuid')
    id?: number | undefined;

    @Column()
    company_name!: string;

    @Column()
    cnpj!: number;

    @Column()
    phone!: string;

    @Column()
    email!: string;

    @Column()
    floor!: string;

    @Column()
    room!: string;

    @Column()
    responsable!: string;

    @CreateDateColumn()
    created_at?: Date | undefined;

    @UpdateDateColumn()
    updated_at?: Date | undefined;
}
