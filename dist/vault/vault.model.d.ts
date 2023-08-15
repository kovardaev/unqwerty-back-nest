import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
export interface VaultModel extends Base {
}
export declare class VaultModel extends TimeStamps {
    name: string;
    slug: string;
    description: string;
    icon: string;
}
