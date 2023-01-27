import React from "react";

import CardPokemon from "../components/cardPokemon/CardPokemon";
import Cabecalho from "../components/cabecalho/Cabecalho";
import PesquisaPokemon from "../components/pesquisaPokemon/PesquisaPokemon";

export default function Home() {
  return (
    <>
      <Cabecalho />

      <PesquisaPokemon />

      <CardPokemon />

    </>
  )
}   
