import axios from "axios"
const apiKey = 'api_key=RGAPI-a0d229c1-e88c-4637-baa0-b1480e315024';

const nombre = (nombre) => {
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

const status = () => {
  return new Promise((resolve, reject) => {
    axios.get(`/val/status/v1/platform-data`, {
      api_key: apiKey,
      Token: "3006c4d5-560c-4ea9-beb2-6a2415faa10d",
    })
      .then(resp => {
        resolve(resp.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const filtroEncomiendas = (data) => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('accessToken')
    const headers = {
      'Authorization': `Bearer ${token}`
    }
    axios.post(`${process.env.BASE_URL}/filtro_encomiendas`, data, {
      headers: headers
    })
      .then(resp => {
        resolve(resp.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const filtroPaged = (data, page) => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('accessToken')
    const headers = {
      'Authorization': `Bearer ${token}`
    }
    axios.post(`${process.env.BASE_URL}/filtro_encomiendas?page=${page}`, data, {
      headers: headers
    })
      .then(resp => {
        resolve(resp.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}

const reimprimir = (data) => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('accessToken')
    const headers = {
      'Authorization': `Bearer ${token}`
    }
    axios.post(`${process.env.BASE_URL}/reimpresion/encomienda`, data, {
      headers: headers
    })
      .then(resp => {
        resolve(resp.data)
      })
      .catch(error => {
        reject(error)
      })
  })
}


export default {
  nombre,
  filtroEncomiendas,
  filtroPaged,
  reimprimir,
  status,
}
