import { Injectable, NotFoundException } from '@nestjs/common';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { genSalt, hash } from 'bcryptjs';
import { Types } from 'mongoose';
import { InjectModel } from 'nestjs-typegoose';
import { UserDto } from './dto/user.dto';
import { UserModel } from './user.model';

@Injectable()
export class UserService {
	constructor(
		@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>
	) {}

	async byId(_id: string) {
		const user = await this.userModel.findById(_id);
		if (!user) throw new NotFoundException('User not found');

		return user;
	}

	async updateProfile(_id: string, dto: UserDto) {
		const user = await this.byId(_id);
		const isSameUser = await this.userModel.findOne({ email: dto.email });

		if (isSameUser && String(_id) !== String(isSameUser._id)) {
			throw new NotFoundException('Email taken');
		}

		if (dto.password) {
			const salt = await genSalt(10);
			user.password = await hash(dto.password, salt);
		}

		user.email = dto.email;

		if (dto.isAdmin || dto.isAdmin === false) user.isAdmin = dto.isAdmin;

		await user.save();
		return;

		throw new NotFoundException('User not found');
	}

	async getFavorites(_id: string) {
		return this.userModel
			.findById(_id, 'favorites')
			.populate({
				path: 'favorites',
				populate: {
					path: 'vaults',
				},
			})
			.exec()
			.then((data) => {
				return data.favorites;
			});
	}

	async toggleFavorite(passId: Types.ObjectId, user: UserModel) {
		const { favorites, _id } = user;

		await this.userModel.findByIdAndUpdate(_id, {
			favorites: favorites.includes(passId)
				? favorites.filter((id) => String(id) !== String(passId))
				: [...favorites, passId],
		});
	}

	async getCount() {
		return this.userModel.find().count().exec();
	}

	async getAll(searchTerm?: string): Promise<DocumentType<UserModel>[]> {
		let options = {};

		if (searchTerm) {
			options = {
				$or: [
					{
						email: new RegExp(searchTerm, 'i'),
					},
				],
			};
		}

		return this.userModel.find(options)
			.select('-password -updatedAt -__v')
			.sort({ createdAt: 'desc' })
			.exec();
	}

	async delete(id: string): Promise<DocumentType<UserModel> | null> {
		return this.userModel.findByIdAndDelete(id).exec();
	}
}
