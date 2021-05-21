// import logo from './logo.svg';
import './App.css';
import React, { useState } from "react"
import Accordion from "./components/Accordion.js"
import Accordion2 from "./components/Accordion2.js"
import Navigation from "./components/Navigation"

const showAccordion = () => {
  if (window.location.pathname === "/accordion"){
    return(
      <div>
        <Navigation />
        <Accordion />
      </div>
    ) 
  }
}

const showtest = () => {
  if (window.location.pathname === "/accordion2"){
    return <Accordion2 />
  }
}

const showNavigation = () => {
  if (window.location.pathname === "/"){
    return <Navigation />
  }
}

export default() => {
  return (
    <div className="ui container">
      {showAccordion()}
      {showtest()}
      {showNavigation()}
    </div>
  )
}
