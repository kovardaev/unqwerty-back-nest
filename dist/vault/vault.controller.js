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
exports.VaultController = void 0;
const common_1 = require("@nestjs/common");
const Auth_decorator_1 = require("../auth/decorators/Auth.decorator");
const id_validation_pipe_1 = require("../pipes/id.validation.pipe");
const vault_dto_1 = require("./dto/vault.dto");
const vault_service_1 = require("./vault.service");
let VaultController = class VaultController {
    constructor(vaultService) {
        this.vaultService = vaultService;
    }
    async bySlug(slug) {
        return this.vaultService.bySlug(slug);
    }
    async getAll(searchTerm) {
        return this.vaultService.getAll(searchTerm);
    }
    async getCollections() {
        return this.vaultService.getCollections();
    }
    async get(id) {
        return this.vaultService.byId(id);
    }
    async create() {
        return this.vaultService.create();
    }
    async update(id, dto) {
        const updateVault = await this.vaultService.update(id, dto);
        if (!updateVault)
            throw new common_1.NotFoundException('Vault not found');
        return updateVault;
    }
    async delete(id) {
        const deletedDoc = await this.vaultService.delete(id);
        if (!deletedDoc)
            throw new common_1.NotFoundException('Vault not found');
    }
};
__decorate([
    (0, common_1.Get)('by-slug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VaultController.prototype, "bySlug", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('searchTerm')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VaultController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/collections'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VaultController.prototype, "getCollections", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, Auth_decorator_1.Auth)('admin'),
    __param(0, (0, common_1.Param)('id', id_validation_pipe_1.IdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VaultController.prototype, "get", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(200),
    (0, Auth_decorator_1.Auth)('admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VaultController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(200),
    (0, Auth_decorator_1.Auth)('admin'),
    __param(0, (0, common_1.Param)('id', id_validation_pipe_1.IdValidationPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, vault_dto_1.VaultDto]),
    __metadata("design:returntype", Promise)
], VaultController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, Auth_decorator_1.Auth)('admin'),
    __param(0, (0, common_1.Param)('id', id_validation_pipe_1.IdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VaultController.prototype, "delete", null);
VaultController = __decorate([
    (0, common_1.Controller)('vaults'),
    __metadata("design:paramtypes", [vault_service_1.VaultService])
], VaultController);
exports.VaultController = VaultController;
//# sourceMappingURL=vault.controller.js.map