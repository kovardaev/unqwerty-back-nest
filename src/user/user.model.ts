import { Ref, prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { PassModel } from 'src/pass/pass.model';

export interface UserModel extends Base {}

export class UserModel extends TimeStamps {
	@prop({ unique: true })
	email: string;

	@prop({})
	password: string;

	@prop({ default: false })
	isAdmin: boolean;

	@prop({ default: [] })
	vaults?: [];

	@prop({ default: [], ref: () => PassModel })
	favorites?: Ref<PassModel>[]
}
