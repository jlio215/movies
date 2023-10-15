import React from 'react'
import { obtenerMedia } from '../../services/mediaService'
import { useEffect, useState } from 'react';

export default function Media() {
   const [media, setMedia] = useState([])

  useEffect(() => {
    listarMedia();
  }, [])
  

  const listarMedia = async () => {
    try {
      const { data } = await obtenerMedia()  
      console.log(data)  
      setMedia(data)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
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
      media.map((media, index)=> {
        const {titulo, sipnosis} = media
        return(
          <tr> 
            <th scope="row">{index+1}</th>
            <td>{titulo}</td>
            <td>{sipnosis}</td>
            <td>
              <button type="button" className="btn btn-info">Edit</button>
              <button 
                type="button" 
                className="btn btn-danger"
                id={media._id}
                // onClick={borrarPorId}
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

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Create Movie</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New Movie</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Director:</label>
            <input type="text" class="form-control" id="recipient-name"></input>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Gender:</label>
            <input type="text" class="form-control" id="recipient-name"></input>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Picture:</label>
            <input type="text" class="form-control" id="recipient-name"></input>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Serial:</label>
            <input type="text" class="form-control" id="recipient-name"></input>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Sipnosis:</label>
            <input type="text" class="form-control" id="recipient-name"></input>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Type:</label>
            <input type="text" class="form-control" id="recipient-name"></input>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Title:</label>
            <input type="text" class="form-control" id="recipient-name"></input>
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Url:</label>
            <input type="text" class="form-control" id="recipient-name"></input>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Add Movie</button>
      </div>
    </div>
  </div>
</div>
</>
  );
}
