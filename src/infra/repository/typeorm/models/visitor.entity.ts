import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { IVisitor } from './dto/IVisitor';

@Entity()
export class Visitor implements IVisitor {
    @PrimaryGeneratedColumn()
    id?: number | undefined;

    @Column({ nullable: true })
    name!: string;

    @Column({ nullable: true })
    address!: string;

    @Column({ nullable: true })
    document!: string;

    @Column({ nullable: true })
    email!: string;

    @Column({ nullable: true })
    phone!: string;

    @Column({ nullable: true })
    floor_to_visit!: string;

    @Column({ nullable: true })
    room_number!: string;

    @Column({ nullable: true })
    company!: string;

    @Column({ nullable: true })
    picture!: string;

    @Column({ nullable: true })
    reason!: string;

    @Column({ nullable: true })
    auth!: string;

    @Column({ nullable: true })
    approver!: string;

    @Column({ nullable: true })
    permission_time!: string;

    @CreateDateColumn()
    created_at?: Date | undefined;

    @UpdateDateColumn()
    updated_at?: Date | undefined;
}
