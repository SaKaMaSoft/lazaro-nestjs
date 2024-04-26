import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ShipsDTO } from './ships.entity';

@Injectable()
export class ShipsService {
    async findAll(): Promise<ShipsDTO> {
        let ships = new ShipsDTO();
        return axios
            .get('https://mocki.io/v1/dd973d74-7bda-4b48-9e22-d9cdaf4d39ef')
            .then((response) => {
                const { data } = response;
                ships.id = data.id;
                ships.name = data.name;
                ships.location = data.location;
                ships.price = data.price;
                return ships;
            })
            .catch((err) => {
                throw new Error(`findAll error: ${err.message}.`);
            });
    }

}
