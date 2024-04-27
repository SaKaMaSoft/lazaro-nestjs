import { ShipsDTO } from './ship.entity';

export interface ShipsRO {
  ships: ShipsDTO[];
  shipsCount: number;
}