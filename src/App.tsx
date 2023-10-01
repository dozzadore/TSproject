import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import  Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Main />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
