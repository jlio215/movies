import React from 'react'
import { obtenerMedia } from '../../services/mediaService'
import { useEffect } from 'react';

export default function Media() {
  // const [media, setMedia] = useState([])

  useEffect(() => {
    listarMedia();
  }, [])
  

  const listarMedia = async () => {
    try {
      const { data } = await obtenerMedia()
      console.log(data)
    // setMedia(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div></div>
  )
}
