import { axiosConfiguration } from '../configuration/axiosConfiguration'

const obtenerMedia = async () => {
    const response = await axiosConfiguration.get('media', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(response.data)
    // setMedia(response.data)
  }

  export {
    obtenerMedia
  }