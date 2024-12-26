import { IsNotEmpty, IsEmail } from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsEmail()
  email!: string;
}
