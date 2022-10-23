import api from "./api";

const loadPokemons = async () => {
  const { data } = await api.get("/pokemons");
  return data;
};

const savePokemon = async ({ pokemonType, treinerName }) => {
  const pokemon = {
    tipo: pokemonType,
    treinador: treinerName,
  };
  const response = await api.post("/pokemons", pokemon);
  return response.status;
};

const battlePokemon = async ({ treinerA, treinerB }) => {
  const { data } = await api.get(`/batalhar/${treinerB}/${treinerA}`);
  console.log(data);
  return data;
};

export { loadPokemons, savePokemon, battlePokemon };
