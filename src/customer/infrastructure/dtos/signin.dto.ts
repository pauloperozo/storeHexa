import { IsNotEmpty, IsEmail, Length } from 'class-validator';

export class SignInDto {
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @Length(5, 5)
  otp!: string;
}
