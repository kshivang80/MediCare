import * as React from "react"
import Footer from "../Components/Footer"
import Home from "../Components/Home"
//import * as containerStyles from "./index.module.css";
//import './index.module.css'

import {Navbar} from "../Components/Navbar"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}



const IndexPage = () => {
  
  return (
    <div >
       <Navbar/>
       <Home/>
       
       <Footer/>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
