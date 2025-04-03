import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Users() {
  return (
      <div>
          <h1 className='text-3xl'> Welcome to user component</h1>
          <h2 className='text-xl'><NavLink to='/user/1'>User 1</NavLink></h2>
          <h2 className='text-xl'><NavLink to='/user/2'>User 2</NavLink></h2>
          <h2 className='text-xl'><NavLink to='/user/3'>User 3</NavLink></h2>
          <h2 className='text-xl'><NavLink to='/user/4'>User 4</NavLink></h2>
          <Outlet />
    </div>
  )
}

export default Users
