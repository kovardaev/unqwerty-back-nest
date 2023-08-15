/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { UserModel } from './user.model';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: ModelType<UserModel>);
    byId(_id: string): Promise<import("mongoose").Document<Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, UserModel> & UserModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: Types.ObjectId;
    }>>;
    updateProfile(_id: string, dto: UserDto): Promise<void>;
    getFavorites(_id: string): Promise<import("@typegoose/typegoose/lib/types").Ref<import("../pass/pass.model").PassModel, Types.ObjectId>[]>;
    toggleFavorite(passId: Types.ObjectId, user: UserModel): Promise<void>;
    getCount(): Promise<number>;
    getAll(searchTerm?: string): Promise<DocumentType<UserModel>[]>;
    delete(id: string): Promise<DocumentType<UserModel> | null>;
}
