import { IsDefined, IsNotEmpty } from 'class-validator';

export class UpdateUserDTO {
    @IsDefined()
    @IsNotEmpty()
    email!: string;
}
