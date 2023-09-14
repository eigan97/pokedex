import { POKEAPI_URL } from "../../appConstants";

export const getAllPokemons = async (offset: number, limit: number): Promise<any> => {
  const resp = await fetch(`${POKEAPI_URL}/pokemon?offset=${offset}&limit=${limit}`);
  return resp.json()
};

export const getPokemonId = async (
name: string
): Promise<any> => {
  const resp = await fetch(
    `${POKEAPI_URL}/pokemon/${name}`
  );
  return resp.json();
};