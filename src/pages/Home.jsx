import React, { useEffect } from "react";
import CardPokemon from "../components/cardPokemon/CardPokemon";
import Cabecalho from "../components/cabecalho/Cabecalho";
import PesquisaPokemon from "../components/pesquisaPokemon/PesquisaPokemon";
import { Container, Grid } from "@mui/material";
import { useState } from "react";

export default function Home() {

  const [api, setApi] = useState([]);

  const filtraPokemon = (nome) => {
    const filtrado = [];
    console.log(nome);
    
  }


  useEffect(() => {
    getApiData();
  }, []);

  const getApiData = async () => {
    try {
      const endpoints = [];
      for (var i = 1; i < 152; i++) {
        endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
      }
      const resposta = await Promise.all(endpoints.map((endpoint) => fetch(endpoint)))
        .then((res) => Promise.all(res.map(async r => r.json())))
        .then((res) => {
          console.log(res)
          setApi(res)
        });
      console.log(resposta);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Container>
        <Grid container spacing={2}>
          <Cabecalho />
          <PesquisaPokemon filtraPokemon={filtraPokemon} />

          {api.map((item, index) => (
            <Grid item key={index} xs={12} sm={4} md={2}>
              <CardPokemon nome={item.name} imagem={item.sprites.front_default} tipo={item.types}/>
            </Grid>
          ))}

        </Grid>
      </Container>

    </>
  )
}   
