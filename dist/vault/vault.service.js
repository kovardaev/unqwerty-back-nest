"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaultService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const vault_model_1 = require("./vault.model");
const pass_service_1 = require("../pass/pass.service");
let VaultService = class VaultService {
    constructor(vaultModel, passService) {
        this.vaultModel = vaultModel;
        this.passService = passService;
    }
    async getAll(searchTerm) {
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
    async bySlug(slug) {
        return this.vaultModel.findOne({ slug }).exec();
    }
    async getPopular() {
        return this.vaultModel
            .find()
            .select('-updatedAt -__v')
            .sort({ createdAt: 'desc' })
            .exec();
    }
    async getCollections() {
        const vaults = await this.getAll();
        const collections = await Promise.all(vaults.map(async (vault) => {
            const passesByVault = await this.passService.byVaults([
                vault._id,
            ]);
            const result = {
                _id: String(vault._id),
                title: vault.name,
                slug: vault.slug,
                image: passesByVault[0].icon,
            };
            return result;
        }));
        return collections;
    }
    async byId(id) {
        return this.vaultModel.findById(id).exec();
    }
    async create() {
        const defaultValue = {
            description: '',
            icon: '',
            name: '',
            slug: '',
        };
        const vault = await this.vaultModel.create(defaultValue);
        return vault._id;
    }
    async update(id, dto) {
        return this.vaultModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    }
    async delete(id) {
        return this.vaultModel.findByIdAndDelete(id).exec();
    }
};
VaultService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(vault_model_1.VaultModel)),
    __metadata("design:paramtypes", [Object, pass_service_1.PassService])
], VaultService);
exports.VaultService = VaultService;
//# sourceMappingURL=vault.service.js.map