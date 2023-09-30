import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "./navbar.module.css";




function NavBar() {

    return (
        <Navbar sticky="top"  expand="md">
            <Container>

                <Nav>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/portfolio">Portfolio</Link>
                    <Link to="/contact">Contact</Link>
                </Nav>

            </Container>
         </Navbar>
    )
}

export default NavBar;