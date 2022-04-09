import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Employees = () => {
  const [list,setlist]=useState([])
  useEffect(()=>{
    fetch(`http://localhost:3004/info`)
     .then(res=>res.json())
    .then(data=>setlist(data))
  },[])

 console.log(list);
 
  return (
    <div>
      <table>
      <thead>
          <td>id</td>
          <td>name</td>
          <td>age</td>
          <td>gender</td>
          <td>department</td>
          <td>salary</td>
      </thead>
       

        <tbody>
         
        {
          list.map((ele)=>{
                    return(
                    <tr>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.age}</td>
                    <td>{ele.gender}</td>
                    <td>{ele.department}</td>
                    <td>{ele.salary}</td>
                    <td>
                     <Link to={`/Employees/${ele.id}`}>More Details</Link>
                    </td>
                    <td>
                     <Link to={`/Employees/${ele.id}/edit`}>Edit Details</Link>
                    </td>
                    </tr>
                    )
                })
               } 
           
         
        </tbody>
      </table>
    </div>
  )
}

export default Employees