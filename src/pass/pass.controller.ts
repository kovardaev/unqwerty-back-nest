import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	NotFoundException,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { IdValidationPipe } from '../pipes/id.validation.pipe';
import { PassDto } from './dto/pass.dto';
import { Auth } from 'src/auth/decorators/Auth.decorator';
import { Types } from 'mongoose';
import { PassService } from './pass.service';

@Controller('passes')
export class PassController {
	constructor(private readonly passService: PassService) {}

	@Get('by-slug/:slug')
	async bySlug(@Param('slug') slug: string) {
		return this.passService.bySlug(slug);
	}

	@Post('by-vaults')
	@HttpCode(200)
	async byGen(
		@Body('vaultIds')
		vaultIds: Types.ObjectId[]
	) {
		return this.passService.byVaults(vaultIds);
	}

	@Get()
	async getAll(@Query('searchTerm') searchTerm?: string) {
		return this.passService.getAll(searchTerm);
	}

	@Get('/most-popular')
	async getMostPopular() {
		return this.passService.getMostPopular();
	}

	@Put('/update-count-opened')
	@HttpCode(200)
	async updateCountOpened(@Body('slug') slug: string) {
		return this.passService.updateCountOpened(slug);
	}

	@Get(':id')
	@Auth('admin')
	async get(@Param('id', IdValidationPipe) id: string) {
		return this.passService.byId(id);
	}

	@Post()
	@HttpCode(200)
	@Auth('admin')
	async create() {
		return this.passService.create();
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	@HttpCode(200)
	@Auth('admin')
	async update(
		@Param('id', IdValidationPipe) id: string,
		@Body() dto: PassDto
	) {
		const updatePass = await this.passService.update(id, dto);
		if (!updatePass) throw new NotFoundException('Not found');
		return updatePass;
	}

	@Delete(':id')
	@Auth('admin')
	async delete(@Param('id', IdValidationPipe) id: string) {
		const deletedDoc = await this.passService.delete(id);
		if (!deletedDoc) throw new NotFoundException('Not found');
	}
}
