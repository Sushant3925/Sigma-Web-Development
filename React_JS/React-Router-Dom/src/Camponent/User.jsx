import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const params = useParams()
  return (
    <div>Hello I am {params.Username}
    </div>
  )
}

export default User
