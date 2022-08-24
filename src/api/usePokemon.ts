import { useQuery } from "@tanstack/react-query";
import { fetchAllPokemon } from "./../fetcher/pokemons";

const useFetchAllPokemon = () => {
  return useQuery(["pokemons"], fetchAllPokemon);
};

export { useFetchAllPokemon };
