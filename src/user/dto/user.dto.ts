import { IsEmail, IsString } from 'class-validator';

export class UserDto {
	@IsEmail()
	email: string;

	password?: string;

	isAdmin?: boolean;
}
