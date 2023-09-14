import Pokemon from "../Pokemon/Pokemon";

function PokemonList({results} :any) {
  return (
    <div style={{display: 'flex', flexWrap:'wrap', width: '100%', marginTop:'20px', justifyContent: 'center'}}>
      {results?.map((item: any) => {
        return <Pokemon item={item} key={item.name} />
      })}
    </div>
  );
}

export default PokemonList;
