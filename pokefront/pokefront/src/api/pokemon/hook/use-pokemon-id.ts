import { useQuery } from "@tanstack/react-query";
import { getPokemonId } from "../pokemon.service";

export const usePokemonId = (name: string, isEnabled: boolean) => {
  return useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemonId(name),
    enabled: isEnabled
  });
};
