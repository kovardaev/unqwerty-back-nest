import { prop, Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { VaultModel } from 'src/vault/vault.model';

export interface PassModel extends Base {}

export class PassModel extends TimeStamps {
	@prop()
	icon: string;

	@prop()
	title: string;

    @prop()
	username: string;

    @prop()
	password: string;

    @prop()
	info: string;

	@prop({ ref: () => VaultModel })
	vaults: Ref<VaultModel>[];

	@prop({ default: 0 })
	countOpened?: number;

	@prop({ unique: true })
	slug: string;
}
