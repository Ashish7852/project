import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='container-fluid text-center' >
      <h1> Welcome to Page</h1>
      <Link to="/register">New Register</Link>
            <span> | </span>
            <Link to="/login">Existing User</Link>
    </div>
  )
}
