import "./App.css";
import { Title, TreinerForm, TreinerList, Battle } from "./components";
import {
  loadPokemons,
  savePokemon,
  battlePokemon,
} from "./service/api-service";

import { useEffect, useState } from "react";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [treinerName, setTreinerName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [battleResult, setBattleResult] = useState({});
  const [treinerA, setTreinerA] = useState("");
  const [treinerB, setTreinerB] = useState("");

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = () => {
    loadPokemons().then((res) => {
      setPokemonList(res);
    });
  };
  const submitBattle = async (event) => {
    event.preventDefault();
    console.log("submitbattle");
    const resp = await battlePokemon({ treinerA, treinerB });
    setBattleResult(resp);
    console.log("Log of anser", resp);
    fetchPokemon();
  };
  const submitForm = async (event) => {
    event.preventDefault();
    console.log("submitForm");
    const resp = await savePokemon({ pokemonType, treinerName });
    if (resp > 300) {
      return window.alert("erro ao salvar pokemon");
    }
    fetchPokemon();
  };
  return (
    <section className="">
      <div className="px-4 my-10 border rounded max-w-3xl mx-auto space-y-6 ">
        <Title />
        <TreinerForm
          setPokemonType={setPokemonType}
          setTreinerName={setTreinerName}
          submitForm={submitForm}
        />
        <TreinerList pokemonList={pokemonList} />
        <Battle
          setTreinerA={setTreinerA}
          setTreinerB={setTreinerB}
          submitBattle={submitBattle}
          battleResult={battleResult}
        />
      </div>
    </section>
  );
}

export default App;
