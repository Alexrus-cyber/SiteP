import './App.css';
import React from "react";
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import  'bootstrap/dist/css/bootstrap.min.css'
import {Skills} from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Banner text1={'Hi im  webdecoded'}/>
        <Skills/>
    </div>
  );
}

export default App;
