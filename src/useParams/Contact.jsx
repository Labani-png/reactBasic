import React from 'react'
import { useParams} from 'react-router-dom'
const Contact = () => {
    const {fname,lname} =useParams()
  return (
    <>


    <h1>This is the contact page</h1>
    {fname}/{lname}
    
    </>
  )
}

export default Contact