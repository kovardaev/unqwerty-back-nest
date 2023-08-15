"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_typegoose_1 = require("nestjs-typegoose");
const user_module_1 = require("../user/user.module");
const pass_controller_1 = require("./pass.controller");
const pass_model_1 = require("./pass.model");
const pass_service_1 = require("./pass.service");
let PassModule = class PassModule {
};
PassModule = __decorate([
    (0, common_1.Module)({
        controllers: [pass_controller_1.PassController],
        imports: [
            nestjs_typegoose_1.TypegooseModule.forFeature([
                {
                    typegooseClass: pass_model_1.PassModel,
                    schemaOptions: {
                        collection: 'Pass',
                    },
                },
            ]),
            user_module_1.UserModule,
        ],
        providers: [pass_service_1.PassService],
        exports: [pass_service_1.PassService],
    })
], PassModule);
exports.PassModule = PassModule;
//# sourceMappingURL=pass.module.js.map