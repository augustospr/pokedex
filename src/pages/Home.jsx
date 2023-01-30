import React, { useEffect } from "react";
import CardPokemon from "../components/cardPokemon/CardPokemon";
import Cabecalho from "../components/cabecalho/Cabecalho";
import PesquisaPokemon from "../components/pesquisaPokemon/PesquisaPokemon";
import { Container, Grid } from "@mui/material";
import { useState } from "react";

export default function Home() {

  const [api, setApi] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=0/`)
      .then((res) => res.json())
      .then((res) => setApi(res.results))
      .catch((err) => {
        console.log(err);
      });
  }

  console.log(api);


  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Cabecalho />
          <PesquisaPokemon />


          {api.map((item, key) => (
            <Grid item key={key}>
              <CardPokemon nome={item.name} />
            </Grid>
          ))}


        </Grid>
      </Container>

    </>
  )
}   
