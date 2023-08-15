import { Injectable } from '@nestjs/common';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { PassDto } from './dto/pass.dto';
import { PassModel } from './pass.model';

@Injectable()
export class PassService {
	constructor(
		@InjectModel(PassModel)
		private readonly passModel: ModelType<PassModel>
	) {}

	async getAll(searchTerm?: string): Promise<DocumentType<PassModel>[]> {
		let options = {};

		if (searchTerm) {
			options = {
				$or: [
					{
						title: new RegExp(searchTerm, 'i'),
					},
				],
			};
		}

		return this.passModel
			.find(options)
			.select('-updatedAt -__v')
			.sort({ createdAt: 'desc' })
			.populate('vaults')
			.exec();
	}

	async bySlug(slug: string): Promise<DocumentType<PassModel>> {
		return this.passModel.findOne({ slug }).populate('vaults').exec();
	}

	async byVaults(
		vaultIds: Types.ObjectId[]
	): Promise<DocumentType<PassModel>[]> {
		return this.passModel.find({ vaults: { $in: vaultIds } }).exec();
	}

	async byId(id: string): Promise<DocumentType<PassModel>> {
		return this.passModel.findById(id).exec();
	}

	async create(): Promise<Types.ObjectId> {
		const defaultValue: PassDto = {
			icon: '',
			title: '',
			vaults: [],
			username: '',
			password: '',
			info: '',
			slug: '',
		};
		const pass = await this.passModel.create(defaultValue);
		return pass._id;
	}

	async updateCountOpened(slug: string) {
		return this.passModel
			.findOneAndUpdate({ slug }, { $inc: { countOpened: 1 } })
			.exec();
	}

	async update(
		id: string,
		dto: PassDto
	): Promise<DocumentType<PassModel> | null> {
		return this.passModel.findByIdAndUpdate(id, dto, { new: true }).exec();
	}

	async delete(id: string): Promise<DocumentType<PassModel> | null> {
		return this.passModel.findByIdAndDelete(id).exec();
	}

	async getMostPopular(): Promise<DocumentType<PassModel>[]> {
		return this.passModel
			.find({ countOpened: { $gt: 0 } })
			.sort({ countOpened: -1 })
			.populate('vaults')
			.exec();
	}
}
