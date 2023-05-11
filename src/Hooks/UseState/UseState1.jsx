import React, { useState } from 'react'

const student={
    name:"Labani",
    email:"labani@gmail.com",
    phone:"86654567"
}

const UseState1 = () => {
    const[user,setUser]=useState(student)
  return (
    <div>
        <h1> use state example </h1>
        <h1>my name is {user.name}</h1>
        <h1>my email is {user.email}</h1>
        <h1>my phone is {user.phone}</h1>
        
    </div>
  )
}

export default UseState1