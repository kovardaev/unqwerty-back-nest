import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class IdValidationPipe implements PipeTransform {
    transform(value: string, meta: ArgumentMetadata): string;
}
