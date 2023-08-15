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
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { UserModel } from './user.model';
import { Types } from 'mongoose';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(_id: string): Promise<import("mongoose").Document<Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, UserModel> & UserModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: Types.ObjectId;
    }>>;
    updateProfile(_id: string, data: UserDto): Promise<void>;
    getFavorites(_id: string): Promise<import("@typegoose/typegoose").Ref<import("../pass/pass.model").PassModel, Types.ObjectId>[]>;
    toggleFavorite(passId: Types.ObjectId, user: UserModel): Promise<void>;
    getCountUsers(): Promise<number>;
    getUsers(searchTerm?: string): Promise<import("@typegoose/typegoose").DocumentType<UserModel, import("@typegoose/typegoose/lib/types").BeAnObject>[]>;
    getUser(id: string): Promise<import("mongoose").Document<Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, UserModel> & UserModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: Types.ObjectId;
    }>>;
    updateUser(id: string, data: UserDto): Promise<void>;
    delete(id: string): Promise<void>;
}
