import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AttractionsDTO } from './attraction.entity';
import { AttractionsRO } from './attraction.interface';

@Injectable()
export class AttractionsService {
    async findAll(): Promise<AttractionsRO> {
        let attractions: AttractionsDTO[] = [];
        let attractionsCount = 0;
        let params = { 'id': 1 };
        const response = await
            axios
                .get('https://mocki.io/v1/7f105026-4a33-44a9-86ab-0f4bf6332647',
                    { params })
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

