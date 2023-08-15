import { Ref } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { VaultModel } from 'src/vault/vault.model';
export interface PassModel extends Base {
}
export declare class PassModel extends TimeStamps {
    icon: string;
    title: string;
    username: string;
    password: string;
    info: string;
    vaults: Ref<VaultModel>[];
    countOpened?: number;
    slug: string;
}
