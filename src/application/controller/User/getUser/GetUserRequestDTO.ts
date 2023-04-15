import { IsDefined, IsNotEmpty } from 'class-validator';

export class GetUserRequestDTO {
    @IsDefined()
    @IsNotEmpty()
    userEmail!: string;
}
