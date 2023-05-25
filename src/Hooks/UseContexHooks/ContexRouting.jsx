import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Result from './Result'
import AboutUser from './AboutUser'
import NavBar from './NavBar'
import ContexState from './Contex/ContexState'

const ContexRouting = () => {
  return (
    <>
    <ContexState>
    <Router>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Result/>}/>
            <Route path='/about' element={<AboutUser/>}/>
        </Routes>
    </Router>
    </ContexState>
   
        
    </>
  )
}

export default ContexRouting