import React from 'react'
import { NavLink } from 'react-router-dom'
function Admin() {
  return (
    <div>
      <h1 className='text-3xl text-center'><NavLink to='/user/admin'>Admin Page</NavLink></h1>
    </div>
  )
}

export default Admin