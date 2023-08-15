import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	Logger,
	NotFoundException,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { Auth } from 'src/auth/decorators/Auth.decorator';
import { IdValidationPipe } from 'src/pipes/id.validation.pipe';
import { VaultDto } from './dto/vault.dto';
import { VaultService } from './vault.service';

@Controller('vaults')
export class VaultController {
	constructor(private readonly vaultService: VaultService) {}

	@Get('by-slug/:slug')
	async bySlug(@Param('slug') slug: string) {
		return this.vaultService.bySlug(slug);
	}

	@Get()
	async getAll(@Query('searchTerm') searchTerm?: string) {
		return this.vaultService.getAll(searchTerm);
	}

	// @Get('/popular')
	// async getPopular() {
	// 	return this.vaultService.getPopular();
	// }

	@Get('/collections')
	async getCollections() {
		return this.vaultService.getCollections();
	}

	@Get(':id')
	@Auth('admin')
	async get(@Param('id', IdValidationPipe) id: string) {
		return this.vaultService.byId(id);
	}

	@UsePipes(new ValidationPipe())
	@Post()
	@HttpCode(200)
	@Auth('admin')
	async create() {
		return this.vaultService.create();
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	@HttpCode(200)
	@Auth('admin')
	async update(
		@Param('id', IdValidationPipe) id: string,
		@Body() dto: VaultDto
	) {
		const updateVault = await this.vaultService.update(id, dto);
		if (!updateVault) throw new NotFoundException('Vault not found');
		return updateVault;
	}

	@Delete(':id')
	@Auth('admin')
	async delete(@Param('id', IdValidationPipe) id: string) {
		const deletedDoc = await this.vaultService.delete(id);
		if (!deletedDoc) throw new NotFoundException('Vault not found');
	}
}
