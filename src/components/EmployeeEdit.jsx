import React from 'react'
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
const EmployeeEdit = () => {

  const { prodId } = useParams();
  const [details, setDetails] = useState(null);

  const [name,setName]=useState("mangesh-server")
  const [age,setAge]=useState("21")
  const [gender,setGender]=useState("male")
  const [salary,setSalary]=useState("22222222")

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

    function updateData()
    {

      fetch('https://jsonplaceholder.typicode.com/todos/'+prodId, {
        method: 'PUT',
        body: JSON.stringify({
          name,
          age,
          gender,
          salary
        }),
        headers: {
        "Content-type": "application/json; charset=UTF-8"}
        })
        .then(response => response.json())
        .then(json => console.log(json))



    }

  //   details.array.forEach(ele => {
  //     setName(ele.name)
  //     setAge(ele.age)
  //     setGender(ele.gender)
  //     setSalary(ele.salary)
  // })
  return (
    <div>
 
      <input type="text" name="" id="" value={name} 
      onChange={(e)=>setName(e.target.value)}
      />

    <input type="text" name="" id="" value={age} 
          onChange={(e)=>setAge(e.target.value)}
          />
       <input type="text" name="" id="" value={gender} 
      onChange={(e)=>setGender(e.target.value)}
      />
       <input type="text" name="" id="" value={salary} 
      onChange={(e)=>setSalary(e.target.value)}
      />
  <button onSubmit={updateData}>sumit</button>
    </div>
  )
}

export default EmployeeEdit