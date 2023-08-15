import { Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { PassModel } from 'src/pass/pass.model';
export interface UserModel extends Base {
}
export declare class UserModel extends TimeStamps {
    email: string;
    password: string;
    isAdmin: boolean;
    vaults?: [];
    favorites?: Ref<PassModel>[];
}
