import React from 'react'

export default function Modal({
  media,
  change,
  guardar,
  clearForm
}) {
  const handleChange = e => {
    change(e)
  }

  const saveMedia = (e) => {
    e.preventDefault()
    guardar()
    clear()
  }

  const clear = () => {
    clearForm()
  }
  return (
    <>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Create Movie</button>

    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">New Movie</h1>
            <button type="button" onClick={clear} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={saveMedia}>
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
            <button type="submit" className="btn btn-primary">Add Movie</button>
          </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
