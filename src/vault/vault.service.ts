import { Injectable } from '@nestjs/common';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { VaultDto } from './dto/vault.dto';
import { VaultModel } from './vault.model';
import { ICollection } from './interfaces/vault.interface';
import { PassService } from '../pass/pass.service';

@Injectable()
export class VaultService {
	constructor(
		@InjectModel(VaultModel)
		private readonly vaultModel: ModelType<VaultModel>,
		private readonly passService: PassService
	) {}

	async getAll(searchTerm?: string): Promise<DocumentType<VaultModel>[]> {
		let options = {};

		if (searchTerm) {
			options = {
				$or: [
					{
						name: new RegExp(searchTerm, 'i'),
					},
					{
						slug: new RegExp(searchTerm, 'i'),
					},
					{
						description: new RegExp(searchTerm, 'i'),
					},
				],
			};
		}

		return this.vaultModel
			.find(options)
			.select('-updatedAt -__v')
			.sort({ createdAt: 'desc' })
			.exec();
	}

	async bySlug(slug: string): Promise<DocumentType<VaultModel>> {
		return this.vaultModel.findOne({ slug }).exec();
	}

	async getPopular(): Promise<DocumentType<VaultModel>[]> {
		return this.vaultModel
			.find()
			.select('-updatedAt -__v')
			.sort({ createdAt: 'desc' })
			.exec();
	}

	async getCollections(): Promise<ICollection[]> {
		const vaults = await this.getAll();

		const collections = await Promise.all(
			vaults.map(async (vault) => {
				const passesByVault = await this.passService.byVaults([
					vault._id,
				]);

				const result: ICollection = {
					_id: String(vault._id),
					title: vault.name,
					slug: vault.slug,
					image: passesByVault[0].icon,
				};

				return result;
			})
		);

		return collections;
	}

	async byId(id: string): Promise<DocumentType<VaultModel>> {
		return this.vaultModel.findById(id).exec();
	}

	async create(): Promise<Types.ObjectId> {
		const defaultValue: VaultDto = {
			description: '',
			icon: '',
			name: '',
			slug: '',
		};
		const vault = await this.vaultModel.create(defaultValue);
		return vault._id;
	}

	async update(
		id: string,
		dto: VaultDto
	): Promise<DocumentType<VaultModel> | null> {
		return this.vaultModel.findByIdAndUpdate(id, dto, { new: true }).exec();
	}

	async delete(id: string): Promise<DocumentType<VaultModel> | null> {
		return this.vaultModel.findByIdAndDelete(id).exec();
	}
}
