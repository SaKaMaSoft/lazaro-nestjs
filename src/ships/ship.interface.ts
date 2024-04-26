import { ShipsDTO } from './ships.entity';

export interface ShipsRO {
  ships: ShipsDTO[];
  shipsCount: number;
}