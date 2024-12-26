import { IsNotEmpty, IsEmail } from 'class-validator';

export class ForgotDto {
  @IsNotEmpty()
  @IsEmail()
  email!: string;
}
