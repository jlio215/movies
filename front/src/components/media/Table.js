import React from 'react'


export default function Table({
    medias = [],
    borrarMediaPorId,
    editar,
    media,
    change1,
    clear,
    extId
}) {

  const borrarPorId = (e) => {
    // e.preventDefault()
    borrarMediaPorId(e)
  }

  const extIduno = async(e) => {
    const id = await extId(e) 
    var form = document.getElementById('botonuno')
    form.addEventListener('submit', function a(e) {
      e.preventDefault()
      editar(id, media)
      clear()
      
    })
  }

  const handleChange = e => {
    change1(e)
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
            <button type="button" id={_id}
                onClick={extIduno} 
                className="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModalUno" 
                data-bs-whatever="@mdo">Edit</button>
              <div className="modal fade" id="exampleModalUno" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Movie</h1>
            <button type="button" onClick={clear} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form  id='botonuno'>
            <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Title:</label>
                <input name='titulo' value={media.titulo} onChange={handleChange} type="text" className="form-control" id="recipient-name"></input>
              </div>
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Director:</label>
                <input name='director' value={media.director} onChange={handleChange} type="text" className="form-control" id="recipient-name"></input>
              </div>
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Gender:</label>
                <input name='genero' value={media.genero} onChange={handleChange} type="text" className="form-control" id="recipient-name"></input>
              </div>
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Productors:</label>
                <input name='productora' value={media.productora} onChange={handleChange} type="text" className="form-control" id="recipient-name"></input>
              </div>
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Picture:</label>
                <input name='imagen' value={media.imagen} onChange={handleChange} type="text" className="form-control" id="recipient-name"></input>
              </div>
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Serial:</label>
                <input name='serial' value={media.serial} onChange={handleChange} type="text" className="form-control" id="recipient-name"></input>
              </div>
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Sypnosis:</label>
                <input name='sipnosis' value={media.sipnosis} onChange={handleChange} type="text" className="form-control" id="recipient-name"></input>
              </div>
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Type:</label>
                <input name='tipo' value={media.tipo} onChange={handleChange} type="text" className="form-control" id="recipient-name"></input>
              </div>
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Url:</label>
                <input name='url' value={media.url} onChange={handleChange} type="text" className="form-control" id="recipient-name"></input>
              </div>
              <div className="modal-footer">
            <button type="button" onClick={clear} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="submit"  className="btn btn-primary">Edit Movie</button>
          </div>
            </form>
          </div>
        </div>
      </div>
    </div>
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
