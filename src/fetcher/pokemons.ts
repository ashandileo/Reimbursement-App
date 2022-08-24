import axios from "./../utils/axios";

export const fetchAllPokemon = () => {
  return axios.get("pokemon");
};
