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
exports.PassController = void 0;
const common_1 = require("@nestjs/common");
const id_validation_pipe_1 = require("../pipes/id.validation.pipe");
const pass_dto_1 = require("./dto/pass.dto");
const Auth_decorator_1 = require("../auth/decorators/Auth.decorator");
const pass_service_1 = require("./pass.service");
let PassController = class PassController {
    constructor(passService) {
        this.passService = passService;
    }
    async bySlug(slug) {
        return this.passService.bySlug(slug);
    }
    async byGen(vaultIds) {
        return this.passService.byVaults(vaultIds);
    }
    async getAll(searchTerm) {
        return this.passService.getAll(searchTerm);
    }
    async getMostPopular() {
        return this.passService.getMostPopular();
    }
    async updateCountOpened(slug) {
        return this.passService.updateCountOpened(slug);
    }
    async get(id) {
        return this.passService.byId(id);
    }
    async create() {
        return this.passService.create();
    }
    async update(id, dto) {
        const updatePass = await this.passService.update(id, dto);
        if (!updatePass)
            throw new common_1.NotFoundException('Not found');
        return updatePass;
    }
    async delete(id) {
        const deletedDoc = await this.passService.delete(id);
        if (!deletedDoc)
            throw new common_1.NotFoundException('Not found');
    }
};
__decorate([
    (0, common_1.Get)('by-slug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PassController.prototype, "bySlug", null);
__decorate([
    (0, common_1.Post)('by-vaults'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)('vaultIds')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], PassController.prototype, "byGen", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('searchTerm')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PassController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)('/most-popular'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PassController.prototype, "getMostPopular", null);
__decorate([
    (0, common_1.Put)('/update-count-opened'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PassController.prototype, "updateCountOpened", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, Auth_decorator_1.Auth)('admin'),
    __param(0, (0, common_1.Param)('id', id_validation_pipe_1.IdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PassController.prototype, "get", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(200),
    (0, Auth_decorator_1.Auth)('admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PassController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.Put)(':id'),
    (0, common_1.HttpCode)(200),
    (0, Auth_decorator_1.Auth)('admin'),
    __param(0, (0, common_1.Param)('id', id_validation_pipe_1.IdValidationPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, pass_dto_1.PassDto]),
    __metadata("design:returntype", Promise)
], PassController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, Auth_decorator_1.Auth)('admin'),
    __param(0, (0, common_1.Param)('id', id_validation_pipe_1.IdValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PassController.prototype, "delete", null);
PassController = __decorate([
    (0, common_1.Controller)('passes'),
    __metadata("design:paramtypes", [pass_service_1.PassService])
], PassController);
exports.PassController = PassController;
//# sourceMappingURL=pass.controller.js.map