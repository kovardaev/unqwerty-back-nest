"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaultModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const vault_controller_1 = require("./vault.controller");
const vault_model_1 = require("./vault.model");
const vault_service_1 = require("./vault.service");
const pass_module_1 = require("../pass/pass.module");
let VaultModule = class VaultModule {
};
VaultModule = __decorate([
    (0, common_1.Module)({
        controllers: [vault_controller_1.VaultController],
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([
                {
                    typegooseClass: vault_model_1.VaultModel,
                    schemaOptions: {
                        collection: 'Vault',
                    },
                },
            ]),
            pass_module_1.PassModule,
        ],
        providers: [vault_service_1.VaultService],
    })
], VaultModule);
exports.VaultModule = VaultModule;
//# sourceMappingURL=vault.module.js.map