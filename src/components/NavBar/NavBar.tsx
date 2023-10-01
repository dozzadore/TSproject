import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from "./navbar.module.css";




function NavBar() {

    return (
        <Navbar className={style.navbar} bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className={style.nav}>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBar;