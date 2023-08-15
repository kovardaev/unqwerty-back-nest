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
import { PassDto } from './dto/pass.dto';
import { PassModel } from './pass.model';
export declare class PassService {
    private readonly passModel;
    constructor(passModel: ModelType<PassModel>);
    getAll(searchTerm?: string): Promise<DocumentType<PassModel>[]>;
    bySlug(slug: string): Promise<DocumentType<PassModel>>;
    byVaults(vaultIds: Types.ObjectId[]): Promise<DocumentType<PassModel>[]>;
    byId(id: string): Promise<DocumentType<PassModel>>;
    create(): Promise<Types.ObjectId>;
    updateCountOpened(slug: string): Promise<import("mongoose").Document<Types.ObjectId, import("@typegoose/typegoose/lib/types").BeAnObject, PassModel> & PassModel & import("@typegoose/typegoose/lib/types").IObjectWithTypegooseFunction & Required<{
        _id: Types.ObjectId;
    }>>;
    update(id: string, dto: PassDto): Promise<DocumentType<PassModel> | null>;
    delete(id: string): Promise<DocumentType<PassModel> | null>;
    getMostPopular(): Promise<DocumentType<PassModel>[]>;
}
