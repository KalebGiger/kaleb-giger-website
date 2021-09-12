import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'

export function CustomNavbar() {

    return (
        <Navbar className="sticky-top" collapseOnSelect expand="lg" variant="dark">
            <Container>
                <FadeInWhenVisible direction='top' duration={.25}>
                    <Navbar.Brand className='logo-link' as={AnchorLink} to="/#home">Kaleb Giger</Navbar.Brand>
                </FadeInWhenVisible>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <FadeInWhenVisible direction='top' duration={.25}>
                    <Navbar.Collapse className='navbar-links' id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link as={AnchorLink} to="/#home" href="#home">Home</Nav.Link>
                            <Nav.Link as={AnchorLink} to="/#about" href="#about">About</Nav.Link>
                            <Nav.Link as={AnchorLink} to="/#portfolio" href="#portfolio">Portfolio</Nav.Link>
                            <Nav.Link as={AnchorLink} to="/#contact" href="#contact">Contact</Nav.Link>
                            <Nav.Link >Resume</Nav.Link>
                            <Nav.Link target="_blank" href={'https://www.linkedin.com/in/kalebgiger'}>
                                <FaLinkedin />
                            </Nav.Link>
                            <Nav.Link target="_blank" href={'https://github.com/kalebgiger'}>
                                <FaGithub />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </FadeInWhenVisible >

            </Container>
        </Navbar>

    )
}