import {
	IsArray,
	IsBoolean,
	IsNumber,
	IsObject,
	IsString,
} from 'class-validator';

export class PassDto {
	@IsString()
	icon: string;

	@IsString()
	title: string;

	@IsString()
	username: string;

    @IsString()
	password: string;

    @IsString()
	info: string

	@IsArray()
	@IsString({ each: true })
	vaults: string[];

	@IsString()
	slug: string;
}
