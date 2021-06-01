// import logo from './logo.svg';
import './App.css';
// import React, { useState } from "react"
import Navigation from "./components/Navigation"
import Route from "./components/Route.js"
import "./styles/Navigation.css"
import "./styles/Pays.css"
import "./styles/Accueil.css";
import "./styles/Card.css";
import Accueil from "./pages/Accueil"
import Animals from "./pages/Pays"
import AnimalCrossing from "./pages/Films"
import Pays from './pages/Pays';


export default () => {
  return (
    <div className = "">
      <Route path="/">
        <Navigation />
        <Accueil />
      </Route>

      <Route path="/pays">
        <Navigation />
        <Pays />
      </Route>

      <Route path="/films">
        <Navigation />
        <AnimalCrossing />
      </Route>

      <Route path="/all">
        <Navigation />
        <Animals />
        <AnimalCrossing />
      </Route>
    </div>
  )
}
