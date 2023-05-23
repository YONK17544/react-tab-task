import React from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cards from './components/Cards'
import Users from './components/Users';
import Posts from './components/Posts';
import TabComp from './pages/TabComponent'


const App=()=>{
  
  return(
    <div>
     <Routes>
      <Route path="/" element={<TabComp />}/>
      <Route path="/users" element={<Users />}/>
      <Route path="/posts" element={<Posts />}/>
      <Route path="/products" element={<Cards />}/>
  
     </Routes>
      
    </div>
  )

}
export default App;