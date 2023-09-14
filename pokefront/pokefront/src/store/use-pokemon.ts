import { create } from "zustand";

export const usePokemonStore = create((set: (arg0: (state: any) => { count: any; }) => any) => ({
  pokemon: {},
  addPokemon: (pokemon: any) => set((state) => state.pokemon = pokemon),
}));
