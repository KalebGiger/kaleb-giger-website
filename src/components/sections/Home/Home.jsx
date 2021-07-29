import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
// import { HashLink as Link } from 'react-router-hash-link';
import { AnchorLink } from "gatsby-plugin-anchor-links";

export function Home() {

    return (
        <Container className="home-page-container">
            <Row>
                <Col className="hero">
                    <div>
                        <h3 className='hero-intro'>Hi, my name is</h3>
                        <div className="typewriter-container">
                            <div className="typewriter-effect">
                                <h1 className='hero-name'>Kaleb Giger.</h1>
                            </div>
                        </div>
                        <h1 className='hero-subtitle'>I'm a software engineer.</h1>
                        <Button as={AnchorLink} smooth to="/#about" variant="outline-primary">About me</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}