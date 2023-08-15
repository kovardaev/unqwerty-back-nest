import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { getMongoConfig } from 'src/config/mongo.config';
import { UserModule } from 'src/user/user.module';
import { AuthModule } from 'src/auth/auth.module';
import { VaultModule } from 'src/vault/vault.module';
import { FilesModule } from 'src/files/files.module';
import { PassModule } from 'src/pass/pass.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		TypegooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoConfig,
		}),
		AuthModule,
		UserModule,
		VaultModule,
		FilesModule,
		PassModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
