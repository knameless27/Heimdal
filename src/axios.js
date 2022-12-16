import axios from "axios"

const generadas = () => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('accessToken')
    const headers = {
      'Authorization': `Bearer ${token}`
    }
    axios.get(`${process.env.BASE_URL}/encomiendas_generadas`, {
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

const anuladas = () => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem('accessToken')
    const headers = {
      'Authorization': `Bearer ${token}`
    }
    axios.get(`${process.env.BASE_URL}/encomiendas_anuladas`, {
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
  generadas,
  anuladas,
  filtroEncomiendas,
  filtroPaged,
  reimprimir,
}
