import React, { memo } from 'react'

const Home = (props) => {
    console.log('child Component' , props.Name);
  return (
    <div>Home C   {props.Name}</div>
  )
}

export default memo(Home) 