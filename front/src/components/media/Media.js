import React from 'react'
import { borrarMedia, editarMedia, obtenerMedia } from '../../services/mediaService'
import { useEffect, useState } from 'react';
import Modal from './Modal'
import Table from './Table';
import { crearMedia } from '../../services/mediaService';

export default function Media() {
   const [medias, setMedias] = useState([])
   const [media, setMedia] = useState({
      titulo : '',
      director : '',
      genero : '',
      productora : '',
      imagen : '',
      serial : '',
      sipnosis : '',
      tipo : '',
      url : '',
})

  useEffect(() => {
    listarMedia();
  }, [])
  

  const listarMedia = async () => {
    try {
      const { data } = await obtenerMedia()  
      console.log(data)  
      setMedias(data)
      
    } catch (error) {
      console.log(error)
    }
  }

  const guardar = async () => {
    try {
        const response = await crearMedia(media)
        console.log(response)
        listarMedia()
    } catch (e) {
        console.log(e)
    }
  }

  const editar = async (e) => {
    const tipoId = e.target.id
    console.log(tipoId)
    try {
        const response = await editarMedia(tipoId, media)
        console.log(response)
        listarMedia()
    } catch (e) {
        console.log(e)
    }
  }

  const handleChange = e => {
    // console.log(e.target.name)
    setMedia({
      ...media,
      [e.target.name]: e.target.value
    })
  }

  const clearForm = () => {
    setMedia({
      titulo : '',
      director : '',
      genero : '',
      productora : '',
      imagen : '',
      serial : '',
      sipnosis : '',
      tipo : '',
      url : '',
    })
  }

  const borrarMediaPorId = async (e) => {
    const id = e.target.id
        try {
          const response = await borrarMedia(id)
          console.log(response)
          listarMedia()
      } catch (e) {
          console.log(e)
      }

  }
  

  return (
    <>
        <Table 
         medias={medias} 
         borrarMediaPorId={borrarMediaPorId}
         clearForm= {clearForm}
         media = {media}
         editar={editar}
         change={handleChange}
        //  id={tipoId}
         />
        <Modal
        media = {media}
        change = {handleChange}
        guardar = {guardar}
        clearForm = {clearForm}
        />
    </>
  );
}
