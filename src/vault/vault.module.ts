import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { VaultController } from './vault.controller';
import { VaultModel } from './vault.model';
import { VaultService } from './vault.service';
import { PassModule } from 'src/pass/pass.module';

@Module({
	controllers: [VaultController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: VaultModel,
				schemaOptions: {
					collection: 'Vault',
				},
			},
		]),
		PassModule,
	],
	providers: [VaultService],
})
export class VaultModule {}
