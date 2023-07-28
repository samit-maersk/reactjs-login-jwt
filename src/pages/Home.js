import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <div>
       <p>Home</p>
       <NavLink to="/">go to feed page</NavLink>
    </div>
  )
}

export default Home