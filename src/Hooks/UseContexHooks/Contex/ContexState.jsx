import React from 'react'
import CreateContexs from './CreateContexs'

const ContexState = ({children}) => {
const state={
    name:"Labani",
    email:"Labani@gmail.com",
    phone:"993393939393"
}
  return (
    <>
    <CreateContexs.Provider value={state}>
        {children}
    </CreateContexs.Provider>
    </>
  )
}

export default ContexState