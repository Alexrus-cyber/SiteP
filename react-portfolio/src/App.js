import './App.css';
import React from "react";
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import  'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
        <Banner text1={'Hi im  webdecoded'}/>
    </div>
  );
}

export default App;
