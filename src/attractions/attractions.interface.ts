import { AttractionsDTO } from './attractions.entity';

export interface AttractionsRO {
  attractions: AttractionsDTO[];
  attractionsCount: number;
}