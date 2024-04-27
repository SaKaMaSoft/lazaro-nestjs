import { AttractionsDTO } from './attraction.entity';

export interface AttractionsRO {
  attractions: AttractionsDTO[];
  attractionsCount: number;
}