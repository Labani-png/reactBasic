import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import PageNotFound from './PageNotFound'
import Contact from './Contact'

const Proute = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about/:id/:name' element={<About/>}/>
            <Route path='*' element={<PageNotFound/>}/>
            <Route path='/contact/:fname/:lname' element={<Contact/>}/>

        </Routes>
    </Router>
    
    
    </>
  )
}

export default Proute