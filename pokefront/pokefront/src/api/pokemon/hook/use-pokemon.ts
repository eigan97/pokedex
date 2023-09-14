import { useQuery } from "@tanstack/react-query"
import { getAllPokemons } from "../pokemon.service"
import { LIMIT } from "../../../appConstants";

export const usePokemon = (activePage: number, limit: number) => {
  return useQuery({
    queryKey: ["pokemon", (activePage-1) * LIMIT],
    queryFn: () => getAllPokemons((activePage - 1) * LIMIT, limit),
  });
}

