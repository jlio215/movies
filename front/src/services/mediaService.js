import { axiosConfiguration } from '../configuration/axiosConfiguration'

const obtenerMedia = async () => {
  return await axiosConfiguration.get('media', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

    // crear un Media
const crearMedia = (data) => {
  return axiosConfiguration.post('media', data, {
  headers: {
    'Content-Type': 'application/json'
  }
})
}

// actualizar Media
const editarMedia = (tipoId, data) => {
  return axiosConfiguration.put('media/'+tipoId, data, {
  headers: {
    'Content-Type': 'application/json'
  }
})
}

// borrar Media
const borrarMedia = (tipoId, data) => {
  return axiosConfiguration.delete('media/'+tipoId, {}, {
  headers: {
    'Content-Type': 'application/json'
  }
})
}

// obtener Media por su ID
const obtenerMediaPorID = (tipoId) => {
  return axiosConfiguration.get('media/'+tipoId, {
  headers: {
    'Content-Type': 'application/json'
  }
})
}

  export {
    obtenerMedia,
    crearMedia,
    editarMedia,
    borrarMedia,
    obtenerMediaPorID
  }