import React from 'react'
import ModalEdit from './ModalEdit'

export default function Table({
    medias = [],
    borrarMediaPorId,
    media,
    editar, 
    clearForm,
    change
}) {

  const borrarPorId = (e) => {
    // e.prevenDefault()
    borrarMediaPorId(e)
  }

  const editarPorId = (e) => {
    // e.prevenDefault()
    editar(e)
  }



  return (
    <table className="table">
    <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Sypnosis</th>
      <th scope="col">Options</th>
    </tr>
  </thead>
  <tbody>
  {
      medias.map((medias, index)=> {
        const {titulo, sipnosis, _id} = medias
        return(
          <tr> 
            <th scope="row">{index+1}</th>
            <td>{titulo}</td>
            <td>{sipnosis}</td>
            <td>
              <ModalEdit
                media = {media}
                change = {change}
                editar = {editarPorId}
                clearForm = {clearForm}
                id ={_id}
                
              />
              <button 
                type="button" 
                className="btn btn-danger"
                id={_id}
                onClick={borrarPorId}
              >
                Delete
              </button>
            </td>
          </tr>
        )
      })
    }
  </tbody>
</table>
  )
}
