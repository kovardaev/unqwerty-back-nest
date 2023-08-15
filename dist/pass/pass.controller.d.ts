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
import { PassDto } from './dto/pass.dto';
import { Types } from 'mongoose';
import { PassService } from './pass.service';
export declare class PassController {
    private readonly passService;
    constructor(passService: PassService);
    bySlug(slug: string): Promise<import("@typegoose/typegoose").DocumentType<import("./pass.model").PassModel, import("@typegoose/typegoose/lib/types").BeAnObject>>;
    byGen(vaultIds: Types.ObjectId[]): Promise<import("@typegoose/typegoose").DocumentType<import("./pass.model").PassModel, import("@typegoose/typegoose/lib/types").BeAnObject>[]>;
    getAll(searchTerm?: string): Promise<import("@typegoose/typegoose").DocumentType<import("./pass.model").PassModel, import("@typegoose/typegoose/lib/types").BeAnObject>[]>;
    getMostPopular(): Promise<import("@typegoose/typegoose").DocumentType<import("./pass.model").PassModel, import("@typegoose/typegoose/lib/types").BeAnObject>[]>;
    updateCountOpened(slug: string): Promise<import("mongoose").Document<Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, import("./pass.model").PassModel> & import("./pass.model").PassModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: Types.ObjectId;
    }>>;
    get(id: string): Promise<import("@typegoose/typegoose").DocumentType<import("./pass.model").PassModel, import("@typegoose/typegoose/lib/types").BeAnObject>>;
    create(): Promise<Types.ObjectId>;
    update(id: string, dto: PassDto): Promise<import("@typegoose/typegoose").DocumentType<import("./pass.model").PassModel, import("@typegoose/typegoose/lib/types").BeAnObject>>;
    delete(id: string): Promise<void>;
}
