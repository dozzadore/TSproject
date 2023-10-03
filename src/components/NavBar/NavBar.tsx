import React from "react";
import NavBarMenu from "./NavBarBootstrap/NavBarMenu";
import style from "./navbar.module.css";





function NavBar() {

    return (
      <div className={style.nav}>
        <NavBarMenu />
      </div>
    )
}

export default NavBar;