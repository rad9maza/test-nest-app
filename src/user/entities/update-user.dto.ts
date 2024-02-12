import { IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  public firstName: string;

  @IsString()
  @IsOptional()
  public lastName: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  public email: string;
}
