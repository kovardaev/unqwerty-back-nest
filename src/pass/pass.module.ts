import { Module } from '@nestjs/common'
import { TypegooseModule } from 'nestjs-typegoose'
import { UserModule } from 'src/user/user.module'
import { PassController } from './pass.controller'
import { PassModel } from './pass.model'
import { PassService } from './pass.service'

@Module({
	controllers: [PassController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: PassModel,
				schemaOptions: {
					collection: 'Pass',
				},
			},
		]),
		UserModule,
	],
	providers: [PassService],
	exports: [PassService],
})
export class PassModule {}
