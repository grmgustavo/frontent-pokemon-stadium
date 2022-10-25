export const TreinerList = ({ pokemonList }) => {
  if (!pokemonList) {
    return (
      <section id="treiner-list">
        <h2>Lista de treinadores</h2>
        <fieldset className="group">
          <p>Nenhum treinador cadastrado</p>
        </fieldset>
      </section>
    );
  }
  return (
    <section id="treiner-list">
      <h2>Lista de treinadores</h2>
      <fieldset className="group">
        <ul>
          {pokemonList.map((item) => {
            return (
              <li
                className="border my-5 py-2 px-2 w-full rounded hover:border-blue-500 text-center"
                key={item.id}
              >
                <p>
                  Id: <strong>{item.id}</strong>
                </p>
                <p>
                  Treinador: <strong>{item.treinador}</strong>
                </p>
                <p>
                  Tipo: <strong>{item.tipo}</strong>
                </p>
                <p>
                  Nível: <strong>{item.nivel}</strong>
                </p>
              </li>
            );
          })}
        </ul>
      </fieldset>
    </section>
  );
};
