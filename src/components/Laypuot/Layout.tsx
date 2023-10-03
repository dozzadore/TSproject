import style from './layout.module.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import  Main from '../Main/Main';
import NavBar from '../NavBar/NavBar';



function Layout() {


  return (
    <div className={style.layout}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Main />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Layout;
