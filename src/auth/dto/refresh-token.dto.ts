import { IsEmail, IsString, MinLength } from 'class-validator';

export class RefreshTokenDto {
	@IsString({ message: 'Token is not a string or missing' })
	refreshToken: string;
}
