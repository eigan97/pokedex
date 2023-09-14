import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { catchError, firstValueFrom, map } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { POKEAPI_URL, pokeColours } from 'src/appConstants';

@Injectable()
export class PokemonService {
  constructor(private readonly httpService: HttpService) {}

  findAll(offset, limit) {
    return this.httpService
      .get(`${POKEAPI_URL}/pokemon?offset=${offset}&limit=${limit}`)
      .pipe(map((res) => {
        return {
          data: res.data,
          nextOffset: offset ? Number(offset) + Number(limit) : 20,
          prevOffset: res.data.previous ? Number(offset) - Number(limit) : 0,
        };
      }));
  }

  findOne(id: string) {
    return this.httpService
      .get(`${POKEAPI_URL}/pokemon/${id}`)
      .pipe(
        map((res) => {
          return {
            name: res.data.name,
            img: res.data.sprites.other['official-artwork'].front_default,
            id: res.data.id,
            color:
              pokeColours[
                res.data.types.map((typeResponse) => typeResponse.type.name)[0]
              ],
            types: res.data.types.map((typeResponse) => typeResponse.type.name),
            weight: res.data.weight,
            height: res.data.height,
          };
        }),
      )
      .pipe(catchError( error => {
        if (error.response.status === 404) {
          throw new NotFoundException(error.message);
        } else {
          throw error;
        }
      }));
  }
}
