import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
  const {id,name}=useParams()
  return (
    <div>
      <h1>This is About Page</h1>
          {id} / {name}
    </div>
  )
}

export default About