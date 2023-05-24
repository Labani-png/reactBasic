import React, { useReducer} from 'react'

const initialState=0
function reducer(state,action){
    switch (action.type){
        case "INCRIMENT":
            return state +1
        case "Decriment":
            return state -1
        default :
        throw new Error
    }
}


const Example1 = () => {
    const [state,dispatch]=useReducer(reducer,initialState)
    
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>dispatch({type:"INCRIMENT"})}>Incriment</button>
      <button onClick={()=>dispatch({type:"Decriment"})}>Decriment</button>
    </div>
  )
}

export default Example1
