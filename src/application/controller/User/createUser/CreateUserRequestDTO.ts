import { IsDefined, IsNotEmpty } from 'class-validator';

export class CreateUserRequestDTO {
    @IsDefined()
    @IsNotEmpty()
    name!: string;

    @IsDefined()
    @IsNotEmpty()
    email!: string;

    @IsDefined()
    @IsNotEmpty()
    password!: string;

    @IsDefined()
    @IsNotEmpty()
    document!: string;

    @IsDefined()
    @IsNotEmpty()
    picture!: string;

    @IsDefined()
    @IsNotEmpty()
    phone!: string;

    @IsDefined()
    @IsNotEmpty()
    job!: string;

    @IsDefined()
    @IsNotEmpty()
    can_approve!: boolean;

    @IsDefined()
    @IsNotEmpty()
    admin!: boolean;
}
