import React, { useState } from 'react'

const Usestatehooks = () => {
    const [user,setUser]=useState("Labani")

  return (
    <>
        <h1>use state Hooks</h1>
           <h1>my name is {user}</h1> 

    </>
  )
}

export default Usestatehooks