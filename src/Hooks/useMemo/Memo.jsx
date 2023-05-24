import React, { useState } from 'react'
import Home from './Home'

const Memo = () => {
    const [count, setCount]=useState(0)
    const userName="Labani"
  return (
    <div>
        
        <h1>Memo in Rect js  P    { count}</h1>
        <button onClick={()=>setCount(count+1)}>Update </button>
        <Home Name={userName}/>
    </div>
  )
}

export default Memo