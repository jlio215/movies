import React from 'react'

export default function Table({
    media = []
}) {
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
  )
}
