import { prop } from '@typegoose/typegoose'
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses'

export interface VaultModel extends Base {}

export class VaultModel extends TimeStamps {
	@prop()
	name: string

	@prop({ unique: true })
	slug: string

	@prop()
	description: string

	@prop()
	icon: string
}

