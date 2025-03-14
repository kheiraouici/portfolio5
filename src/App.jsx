import React from "react";
import './App.css'
import Header from "./components/Header";
import Main from "./components/Main"

function App () {
  return(
    <>
    <div className="main">
      <Header />
    </div>
    <div className="main2">
      <Main/>
    </div>
    </>
  )
}
export default App