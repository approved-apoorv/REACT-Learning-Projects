import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {id} = useParams()
  return (
    <div className='bg-orange-700 rounded-4xl text-white text-3xl p-4'>User: {id}</div>
  )
}

export default User