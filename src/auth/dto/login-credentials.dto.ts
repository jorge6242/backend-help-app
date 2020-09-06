import { IsString, IsNotEmpty } from 'class-validator';

export class AuthLoginCredentialsDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
