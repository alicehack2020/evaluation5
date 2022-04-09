 import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
const EmployeeDetail = () => {
  const { prodId } = useParams();
  const [details, setDetails] = useState(null);

     useEffect(() => {
        fetch(`http://localhost:3004/info?id=${prodId}`)
            .then((res) => res.json())
            .then((res) => setDetails(res))
            .catch((err) => console.log(err))
    }, []);

    if(details===null) {
        return <h1>...Loading Data</h1>
    }
    else if(details.length===0){
        return <h1>user does not exist</h1>
    }

    console.log(details);

    return (
        <div>
        <h1>Employees Details</h1>
        {   
            details.map((item) => (
                <div key={item.id}>
                    <h2>name: {item.name}</h2>
                    <h2>age: {item.age}</h2>
                    <h2>salary: {item.salary}</h2>
                    <h2>departmant: {item.department}</h2>
                    <h2>gender: {item.gender}</h2>
                </div>
            ))
        }
        </div>
    )
}

export default EmployeeDetail