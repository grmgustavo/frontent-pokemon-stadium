export const TreinerForm = ({ setPokemonType, setTreinerName, submitForm }) => {
  return (
    <section id="treiner-form">
      <form onSubmit={submitForm}>
        <fieldset className="group">
          <label htmlFor="treiner">
            <strong>Cadastre-se no Pokemon Stadium</strong>
          </label>
          <div className="field">
            <label htmlFor="treiner">
              <strong>Nome do treinador</strong>
            </label>
            <input
              className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-blue-500"
              type="text"
              name="treiner"
              id="treiner"
              required
              placeholder="Insira o nome do treinador"
              onChange={(event) => {
                setTreinerName(event.target.value);
              }}
            />
          </div>

          <div className="field">
            <label htmlFor="pokemon">
              <strong>Pokemon</strong>
            </label>
            <select
              className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-blue-500"
              id="pokemon"
              required
              defaultValue="Selecione"
              onChange={(event) => {
                setPokemonType(event.target.value);
              }}
            >
              <option value="Selecione" disabled>
                Selecione
              </option>
              <option value="pikachu">Pikachu</option>
              <option value="charizard">Charizard</option>
              <option value="mewtwo">Mewtwo</option>
            </select>
          </div>
        </fieldset>
        <button
          className="border border-gray-400 block rounded w-1/2 py-2 px-4 mt-5 mx-auto hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          type="submit"
        >
          Concluído
        </button>
      </form>
    </section>
  );
};
