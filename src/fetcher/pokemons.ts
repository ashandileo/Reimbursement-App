import axios from "./../utils/axios";

export const fetchAllPokemon = () => {
  axios.get("pokemon");
};
