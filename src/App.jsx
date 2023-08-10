import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter,Route, Routes } from 'react-router-dom'
import Table from './Table'
import Edit from './Edit'
import Store from './Store'
import Home from './Home'
import Contact from './Contact'
import AddStudent from './AddStudent'
import "./Navigation.css"
const App=() =>{
  

  return (
    <>
    <div className='background'>
     <Provider store={Store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<Table/>}/>
        <Route path="/addnew" element={<AddStudent />}/>
        <Route path='/editStudent' element={<Edit/>}/>
        <Route path='/contact' element={<Contact/>}/>

        
        <Route/>
      </Routes>
      </BrowserRouter>
     </Provider>
     </div>
    </>
  )
}

export default App
