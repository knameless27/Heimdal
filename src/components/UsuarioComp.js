import { Container, Row, Col, Card } from 'react-bootstrap';
import React, { useState } from 'react';
import busqueda from './busquedas';
import Ddragon from "ddragon";
const dd = new Ddragon(
  "12.23.1", // defaults to 8.9.1
  "en_US", // defaults to en_US
  "https://ddragon.leagueoflegends.com" // defaults to https://dragon.leagueoflegends.com
);

function UsuarioComp(Usuario) {
  let user = {}, maestrias = [];
  if (Object.entries(Usuario?.Usuario).length > 0) {
    user = Usuario.Usuario
    user.imagen = dd.images.profileicon(`${user.profileIconId}.png`)

    busqueda.maestria(user.id).then((res) => {
      for (let i = 0; i <= 2; i++) {
        maestrias.push(res[i])
      }
      user.maestriardas = maestrias
    })
  }
  console.log(user.maestriardas) 
  console.log(user)

  return (
    <Container>
      {
        user.imagen &&
        <Card border="info" style={{ padding: '3%' }}>
          <Row>
            <Col xs={3}>
              <img src={user.imagen} style={{ borderRadius: '50%' }} />
            </Col>
            <Col>
              <h1>{user?.name}</h1>
              <h3>Nivel del jugador: {user?.summonerLevel}</h3>
              <ul>
              </ul>
            </Col>
          </Row>
        </Card>
      }
    </Container>
  );
}


export default UsuarioComp;