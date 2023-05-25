import React, { useContext } from 'react'
import CreateContexs from './Contex/CreateContexs'

const AboutUser = () => {
    const finalData=useContext(CreateContexs)
  return (
    <div>
        
        <h1>AboutUser Component User Data Fetch from Contex</h1>

        <h1>my Name is {finalData.name}</h1>
        <h1>my email is {finalData.email}</h1>
        <h1>my phone is {finalData.phone}</h1>
    </div>
  )
}

export default AboutUser