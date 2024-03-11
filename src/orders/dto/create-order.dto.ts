import { IsString, IsNotEmpty } from 'class-validator';

export class LoadingDetails {
  readonly index: string;
  readonly dateTime: string;
  readonly address: string;
  readonly coordinates: string;
  readonly comments: string;
  readonly distance: number;
}

export class CreateOrderDto {
  @IsNotEmpty()
  readonly truckNumber: string;
  @IsNotEmpty()
  readonly order: LoadingDetails;
}
