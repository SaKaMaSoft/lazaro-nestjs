import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ShipsDTO } from './ships.entity';
import { ShipsRO } from './ship.interface';

@Injectable()
export class ShipsService {
    async findAll(): Promise<ShipsRO> {
        let ships: ShipsDTO[] = [];
        let shipsCount = 0;
        const response = await
            axios
                .get('https://mocki.io/v1/dd973d74-7bda-4b48-9e22-d9cdaf4d39ef')
                .then((response) => {
                    return response;
                })
                .catch((err) => {
                    throw new Error(`findAll error: ${err.message}.`);
                });
        const { data } = response;
        ships = data.ships;
        shipsCount = ships.length;
        return { ships, shipsCount };
    }

}
