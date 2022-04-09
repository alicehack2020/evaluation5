import React from 'react'
import { Link } from 'react-router-dom'
  const Header = () => {
  return (
    <div className='header_div'>
    <Link to="/">Home</Link>
    <Link to="/Login">Login</Link>
    <Link to="/Register">Register</Link>
    <Link to="/Employees">Employees</Link>
    <Link to="/EmployeeAdd">EmployeeAdd</Link>
 </div>
  )
}

export default Header