import React from 'react'

export default function Modal() {
  return (
    <>
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Create Movie</button>

    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">New Movie</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Director:</label>
                <input type="text" className="form-control" id="recipient-name"></input>
              </div>
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Gender:</label>
                <input type="text" className="form-control" id="recipient-name"></input>
              </div>
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Picture:</label>
                <input type="text" className="form-control" id="recipient-name"></input>
              </div>
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Serial:</label>
                <input type="text" className="form-control" id="recipient-name"></input>
              </div>
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Sipnosis:</label>
                <input type="text" className="form-control" id="recipient-name"></input>
              </div>
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Type:</label>
                <input type="text" className="form-control" id="recipient-name"></input>
              </div>
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Title:</label>
                <input type="text" className="form-control" id="recipient-name"></input>
              </div>
              <div className="mb-3">
                <label for="recipient-name" className="col-form-label">Url:</label>
                <input type="text" className="form-control" id="recipient-name"></input>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Add Movie</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
