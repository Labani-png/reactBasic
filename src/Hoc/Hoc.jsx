import React from 'react'
import { useState } from 'react'

export default function Hoc() {
  return (
    <>
      <h1>React high order component</h1>
      <HocFinal cmp={Hoc1}/>
      <HocGreen cmp={Hoc1}/>
      <HocBlue cmp={Hoc1}/>
      <HocOrange countt={Hoc1}/>
      <HocYellow updatenumber={Hoc1}/>
    </>
  )
}

function HocFinal(props){
  return <h2 style={{background:'red',width:'300px'}}>RED<props.cmp/></h2>
}
function HocGreen(props){
  return <h2 style={{background:'green',width:'300px'}}>GREEN<props.cmp/></h2>  
}
function HocBlue(props){
  return <h2 style={{background:'blue', color:'white',width:'300px'}}>BLUE<props.cmp/></h2>  
}
function HocOrange(props){
  return <h2 style={{background:'orange', color:'white',width:'300px'}}>Orange <props.countt/></h2>  
}
function HocYellow(props){
  return <h2 style={{background:'yellow', color:'white',width:'300px'}}>Yellow <props.updatenumber/></h2>  
}


//custom hooks
function Hoc1(){
  const [count,setCount]=useState(0)
  return (
    <div>     
      <h2>{count}</h2>
      <button onClick={()=>{setCount(count+1)}}>Updare-count</button>
    </div>
  )
}


