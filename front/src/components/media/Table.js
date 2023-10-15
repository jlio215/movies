import React from 'react'

export default function Table({
    medias = []
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
      medias.map((medias, index)=> {
        const {titulo, sipnosis} = medias
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
                id={medias._id}
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
