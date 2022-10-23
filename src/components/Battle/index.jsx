export const Battle = ({
  setTreinerA,
  setTreinerB,
  submitBattle,
  battleResult,
}) => (
  <section id="Battle" className="py-12">
    <form onSubmit={submitBattle}>
      <fieldset className="group">
        <label htmlFor="treinerA">
          <strong>Batalha</strong>
        </label>
        <h3>
          <strong>Insira o ID dos treinadores que irão batalhar</strong>
        </h3>
        <div className="field">
          <label htmlFor="treinerA">
            <strong>ID treinador 1</strong>
          </label>
          <input
            className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-blue-500"
            type="text"
            name="treinerA"
            id="treinerA"
            required
            onChange={(event) => setTreinerA(event.target.value)}
            placeholder="Insira o id do treinador 1"
          />
        </div>
        <div className="field">
          <label htmlFor="treinerB">
            <strong>ID treinador 2</strong>
          </label>
          <input
            className="border border-gray-400 block py-2 px-4 w-full rounded focus:outline-none focus:border-blue-500"
            type="text"
            name="treinerB"
            id="treinerB"
            required
            onChange={(event) => {
              setTreinerB(event.target.value);
            }}
            placeholder="Insira o id do treinador 2"
          />
        </div>
      </fieldset>
      <button
        type="submit"
        className="border  border-gray-400 block rounded w-1/2 py-2 mt-5 mx-auto hover:bg-blue-500 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
      >
        Batalhar
      </button>
    </form>
    <section className="border my-5 py-2 px-2 w-full rounded hover:border-blue-500 text-center">
      {battleResult?.vencedor?.treinador ? (
        <>
          <h3 className="py-1">resultado:</h3>
          <div className="py-1">Vencedor:{battleResult.vencedor.treinador}</div>
        </>
      ) : (
        ""
      )}
      {battleResult?.perdedor?.treinador ? (
        <>
          <div className="py-1">Perdedor:{battleResult.perdedor.treinador}</div>
        </>
      ) : (
        ""
      )}
    </section>
  </section>
);
