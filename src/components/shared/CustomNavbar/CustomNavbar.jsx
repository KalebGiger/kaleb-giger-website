import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'
import Button from 'react-bootstrap/Button'
import Pdf from '../../../documents/Kaleb Giger - Resume.pdf';

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
                            <Nav.Link className='navigation-link' as={AnchorLink} to="/#home" href="#home">Home</Nav.Link>
                            <Nav.Link className='navigation-link' as={AnchorLink} to="/#about" href="#about">About</Nav.Link>
                            <Nav.Link className='navigation-link' as={AnchorLink} to="/#portfolio" href="#portfolio">Portfolio</Nav.Link>
                            <Nav.Link className='navigation-link' as={AnchorLink} to="/#contact" href="#contact">Contact</Nav.Link>
                            <Button href={Pdf} target="_blank" variant='outline' className='btn btn-outline-primary navigation-link'>Resume</Button>
                            <Nav.Link className='navigation-link' target="_blank" href={'https://www.linkedin.com/in/kalebgiger'}>
                                <FaLinkedin />
                            </Nav.Link>
                            <Nav.Link className='navigation-link' target="_blank" href={'https://github.com/kalebgiger'}>
                                <FaGithub />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </FadeInWhenVisible >
            </Container>
        </Navbar>

    )
}