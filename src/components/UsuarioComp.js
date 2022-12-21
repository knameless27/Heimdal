import { Container, Row, Col, Card } from 'react-bootstrap';
import React, { useState } from 'react';
import busqueda from './busquedas';
import Ddragon from "ddragon";
import Campeones from '../data/campeones'
const dd = new Ddragon(
  "12.23.1", // defaults to 8.9.1
  "en_US", // defaults to en_US
  "https://ddragon.leagueoflegends.com" // defaults to https://dragon.leagueoflegends.com
);

function UsuarioComp(Usuario) {
  // console.log(Campeones)
  let user = {}, maestrias = [];
  if (Object.entries(Usuario?.Usuario).length > 0) {
    user = Usuario.Usuario
    user.imagen = dd.images.profileicon(`${user.profileIconId}.png`)

    busqueda.maestria(user.id).then((res) => {
      for (let i = 0; i <= 2; i++) {
        res[i].nombre = Campeones[res[i].championId]
        res[i].imagen = dd.images.splash(`${res[i].nombre}`, '0')
        maestrias.push(res[i])
      }
      user.maestriardas = maestrias
    })
  }
  console.log(dd.data.item())
  console.log(user)
  const mostrarChamps = user?.maestriardas.map((champ) =>
    <Col>
      <Card border="success" style={{ padding: '3%' }}>
        <Col xs='auto'>
          <img src={champ.imagen} alt="xd" width="100%"/>
        </Col>
        <Col>
          <h4 style={{ textAlign: "center" }}>{champ.nombre}</h4>
          <h5>{champ.championLevel}</h5>
          <h5>{champ.championPoints}</h5>
        </Col>
      </Card>
    </Col>
  )
  return (
    <Container>
      {
        user.imagen &&
        <Card border="info" style={{ padding: '3%' }}>
          <Row>
            <Col xs={3}>
              <img src={user.imagen} style={{ borderRadius: '50%' }} alt="XD" />
            </Col>
            <Col>
              <h1>{user?.name}</h1>
              <h3>Nivel del jugador: {user?.summonerLevel}</h3>
            </Col>
          </Row>
            <Row><Col><hr /></Col></Row>
          <Row>{mostrarChamps}</Row>
        </Card>
      }
    </Container>
  );
}


export default UsuarioComp;