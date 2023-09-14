import { useEffect } from "react";
import { usePokemonId } from "../../api/pokemon/hook/use-pokemon-id";
import { UserCardImage } from "../../componets/Card";
import { Loader } from "@mantine/core";

function Pokemon(pokemon: any) {
  const { data, isSuccess } = usePokemonId(pokemon?.item?.name, true);
  useEffect(()=> {
    console.log(pokemon)
  },[])
  return isSuccess ? (
    <div style={{width: '300px', margin: '0px 10px 10px 0px'}}>
      <UserCardImage
        image={data.color}
        avatar={data.img}
        name={pokemon?.item?.name}
        job={data?.types?.toString()}
        stats={[
          { value: data.id, label: "Identificador" },
          { value: data.weight, label: "Peso" },
          { value: data.height, label: "Altura" },
        ]}
      />
    </div>
  ) : (
    <Loader />
  );
}

export default Pokemon;
