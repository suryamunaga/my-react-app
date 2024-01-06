import React from 'react'
import "./Menu.css"
import {menuIteam} from "./Configiration"
import {Link,HashRouter,Routes,Route,Navigate} from "react-router-dom"
import Home from '../HOME'
import {About} from '../ABOUT'
import {Contact} from '../CONTACT'

 const Menu = () => {
  return <div>
    <HashRouter>
    <ul className='menu'>
        {
            menuIteam.map(({name,link},index)=>{
                return <li key={`li_${index}`}><Link to={link}>{name}</Link></li>
                
            })
        }
        
    </ul>
    <Routes>
        <Route path ="/home" element= {<Home/>}/>
        <Route path ="/about" element= {<About/>}/>
        <Route path ="/contact" element= {<Contact/>}/>
        <Route path ="*" element= {<Navigate to="/home"/>}/>
    </Routes>
    </HashRouter>
  </div> 
}
export default Menu
