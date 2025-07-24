import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Commponent/NavBar/NavBar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Commponent/Home/Home'
import About from './Commponent/About/About'
import Conatct from './Commponent/Conatct/Conatct'
import Portfolio from './Commponent/Portfolio/Portfolio.JSX'
import Footer from './Commponent/Footer/Footer'
import Layout from './Commponent/Layout/Layout'
import NotFound from './Commponent/NotFound/NotFound'



const routers=createBrowserRouter([
{path:'/' , element:<Layout/>  , children:[ {index :true , element:<Home/>},
  {path:'/about' , element:<About/>},
   
  {path:'/portfolio' , element:<Portfolio/>},
  {path:'/CONTACT' , element:<Conatct/>},

{path:'*' , element:<NotFound/>}

]},

])
function App() {
  return (
    <>
 <RouterProvider   router={routers}>

 </RouterProvider> 
    </>
  )
}
export default App
