import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AttractionsDTO } from './attractions.entity';
import { AttractionsRO } from './attractions.interface';

@Injectable()
export class AttractionsService {
    async findAll(): Promise<AttractionsRO> {
        let attractions: AttractionsDTO[] = [];
        let attractionsCount = 0;
        const response = await
            axios
                .get('https://mocki.io/v1/7f105026-4a33-44a9-86ab-0f4bf6332647')
                .then((response) => {
                    return response;
                })
                .catch((err) => {
                    throw new Error(`findAll error: ${err.message}.`);
                });        
        const { data } = response;
        attractions = data.ships;
        attractionsCount = attractions.length;
        return { attractions, attractionsCount };
    }
}

