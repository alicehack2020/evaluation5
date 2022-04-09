import React from 'react'
import { Link } from 'react-router-dom'
  const Header = () => {
  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/Login">Login</Link>
    <Link to="/Register">Register</Link>
    <Link to="/Employees">Employees</Link>
 </>
  )
}

export default Header