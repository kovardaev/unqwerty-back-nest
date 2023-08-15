import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { VaultDto } from './dto/vault.dto';
import { VaultModel } from './vault.model';
import { ICollection } from './interfaces/vault.interface';
import { PassService } from '../pass/pass.service';
export declare class VaultService {
    private readonly vaultModel;
    private readonly passService;
    constructor(vaultModel: ModelType<VaultModel>, passService: PassService);
    getAll(searchTerm?: string): Promise<DocumentType<VaultModel>[]>;
    bySlug(slug: string): Promise<DocumentType<VaultModel>>;
    getPopular(): Promise<DocumentType<VaultModel>[]>;
    getCollections(): Promise<ICollection[]>;
    byId(id: string): Promise<DocumentType<VaultModel>>;
    create(): Promise<Types.ObjectId>;
    update(id: string, dto: VaultDto): Promise<DocumentType<VaultModel> | null>;
    delete(id: string): Promise<DocumentType<VaultModel> | null>;
}
