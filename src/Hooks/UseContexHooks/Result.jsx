import React, { useContext } from 'react'
import CreateContexs from './Contex/CreateContexs'

const Result = () => {
    const finalData=useContext(CreateContexs)

    console.log(finalData);
  return (
    <div>
        <h1>Result Component User Data Fetch from Contex</h1>

        <h1>my Name is {finalData.name}</h1>
        <h1>my email is {finalData.email}</h1>
        <h1>my phone is {finalData.phone}</h1>
    </div>
  )
}

export default Result