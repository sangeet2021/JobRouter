import React from 'react'
import { useRouteError } from 'react-router-dom'

const CareerError = () => {
    const error:unknown = useRouteError();
  return (
    <div>
        <h2>Error</h2>
        <p>{error.message}</p>
    </div>
    
  )
}

export default CareerError