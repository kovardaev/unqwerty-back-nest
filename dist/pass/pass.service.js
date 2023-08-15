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
exports.PassService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const pass_model_1 = require("./pass.model");
let PassService = class PassService {
    constructor(passModel) {
        this.passModel = passModel;
    }
    async getAll(searchTerm) {
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
    async bySlug(slug) {
        return this.passModel.findOne({ slug }).populate('vaults').exec();
    }
    async byVaults(vaultIds) {
        return this.passModel.find({ vaults: { $in: vaultIds } }).exec();
    }
    async byId(id) {
        return this.passModel.findById(id).exec();
    }
    async create() {
        const defaultValue = {
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
    async updateCountOpened(slug) {
        return this.passModel
            .findOneAndUpdate({ slug }, { $inc: { countOpened: 1 } })
            .exec();
    }
    async update(id, dto) {
        return this.passModel.findByIdAndUpdate(id, dto, { new: true }).exec();
    }
    async delete(id) {
        return this.passModel.findByIdAndDelete(id).exec();
    }
    async getMostPopular() {
        return this.passModel
            .find({ countOpened: { $gt: 0 } })
            .sort({ countOpened: -1 })
            .populate('vaults')
            .exec();
    }
};
PassService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, nestjs_typegoose_1.InjectModel)(pass_model_1.PassModel)),
    __metadata("design:paramtypes", [Object])
], PassService);
exports.PassService = PassService;
//# sourceMappingURL=pass.service.js.map