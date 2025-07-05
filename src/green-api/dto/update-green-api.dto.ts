import { PartialType } from '@nestjs/mapped-types';
import { CreateGreenApiDto } from './create-green-api.dto';

export class UpdateGreenApiDto extends PartialType(CreateGreenApiDto) {}
