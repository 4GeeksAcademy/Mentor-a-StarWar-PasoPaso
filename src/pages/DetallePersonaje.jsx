import React from 'react'
import { useParams } from 'react-router-dom'

function DetallePersonaje() {
const id = useParams();
console.log(id)



  return (
    <div className='container-detalle'>
      <div>

      </div>
    </div>
  )
}

export default DetallePersonaje
