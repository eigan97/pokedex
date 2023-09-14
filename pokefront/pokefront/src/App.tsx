import { useEffect, useState } from 'react'
import './App.css'
import { Search } from './componets/Search'
import { Loader, Pagination } from '@mantine/core'
import { LIMIT } from './appConstants';
import { usePokemon } from './api/pokemon/hook/use-pokemon';
import PokemonList from './containers/PokemonList/PokemonList';
import { usePokemonId } from './api/pokemon/hook/use-pokemon-id';
import Pokemon from './containers/Pokemon/Pokemon';
import { usePokemonStore } from './store/use-pokemon';
import { isEmpty } from 'lodash';
function App() {
  const [activePage, setPage] = useState(1);
  const [nameSearch, setName] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const { pokemon } = usePokemonStore();

  const { data, isSuccess, refetch: refetchAll } = usePokemon(activePage, LIMIT);
  const { data: dataPokemon, isSuccess: isSuccessPokemon, refetch } = usePokemonId(nameSearch, false);

  useEffect(() => {
   if(isSuccessPokemon && dataPokemon.statusCode !== 404 && nameSearch) {
     setResults([dataPokemon])
   }
 }, [isSuccessPokemon]);

  useEffect(() => {
    if (isSuccess && !nameSearch) {
      setResults(data.data.results);
    }
  }, [isSuccess, activePage, nameSearch]);

  return (
    <>
      {isSuccess ? (
        <div style={{ display: "flex" }}>
          <div>
            <Search
              onChange={(value) => {
                setName(value.target.value);
              }}
              onClickButton={() => {
                if (nameSearch) {
                  refetch();
                } else {
                  refetchAll();
                }
              }}
            />
            {dataPokemon?.statusCode === 404 ? (
              <h1>No se encontraron pokemon</h1>
            ) : (
              <div style={{ marginTop: "20px" }}>
                {nameSearch === "" ? (
                  <Pagination
                    value={activePage}
                    total={data.data.count / LIMIT}
                    onChange={(value) => {
                      setPage(value);
                    }}
                  />
                ) : null}
                <div>
                  <PokemonList results={results} />
                </div>
              </div>
            )}
          </div>
          {!isEmpty(pokemon) ? (
            <div
              style={{
                marginLeft: "20px",
                display: "flex",
                justifyContent: "center",
                width: " 600px",
              }}
            >
              <Pokemon item={{ name: pokemon.name }} />
            </div>
          ) : null}
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}

export default App
