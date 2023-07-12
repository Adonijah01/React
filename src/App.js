import React from "react";
//import logo from './logo.svg';
//import './App.css';
import FunctionalComp from "./Components/FunctionalComp";
import {ClassComp, ClassComp1} from "./Components/ClassComp";
import Click from "./Components/Click";
import counter from "./Components/counter";
function App() {
  return (
    <div>
    <h1> Hello Welcome</h1>
    <h1>This video is about components.</h1>
    <FunctionalComp />
    <ClassComp />
    <ClassComp1 />
    <Click />
    <counter/>
    </div>
  );
}

export default App;
