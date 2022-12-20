import axios from 'axios';
const apiKey = 'api_key=RGAPI-9f5887e9-92ce-4505-a490-3452447b26ac'

const buscarNombre = (nombre) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nombre}?${apiKey}`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const maestria = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://la1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${id}?${apiKey}`)
      .then(resp => {
        resolve(resp.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export default {
  buscarNombre,
  maestria
};