import React, { useReducer, useEffect } from 'react'
//define initial valu line usestate jeta kortam seti
//stape1
const initialstate = {
  loding: true,
  error: '',
  postData: {}
}
// call reducer function
//stape 2 define reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        loding: false,
        //DEFINE ACTION NAME IS RESULT
        postData: action.result,
        error: ''
      }
    case 'ERROR':
      return {
        loding: false,
        postData: {},
        error: 'PROBLEM TO FETCH'
      }
    default:
      return state
  }
}
const Reducer1 = () => {
  //stape 3 define use reducer
  
  const [state, dispatch] = useReducer(reducer, initialstate)
  //stape 4 call api
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'SUCCESS', result: data })
      })
      .catch(error => {
        dispatch({ type: 'ERROR' })

      })
  }, [])

  return (
    <>
      <h1>get the api data using use reduce hooks</h1>
     
      {state.postData.body}
      {state.error || null}

      
    </>
  )
}

export default Reducer1
