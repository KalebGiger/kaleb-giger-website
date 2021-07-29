import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { AnchorLink } from "gatsby-plugin-anchor-links";

export function CustomNavbar() {

    return (
        <Navbar className="sticky-top" collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Navbar.Brand as={AnchorLink} to="/#home">Kaleb Giger</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link as={AnchorLink} to="/#home" href="#home">Home</Nav.Link>
                        <Nav.Link as={AnchorLink} to="/#about" href="#about">About</Nav.Link>
                        <Nav.Link as={AnchorLink} to="/#portfolio" href="#portfolio">Portfolio</Nav.Link>
                        <Nav.Link as={AnchorLink} to="/#experience" href="#experience">Experience</Nav.Link>
                        <Nav.Link >Resume</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}