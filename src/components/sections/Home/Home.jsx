import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
// import { HashLink as Link } from 'react-router-hash-link';
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'

export function Home() {

    return (
        <Container className="home-page-container">
            <Row>
                <Col className="hero">
                    <div>
                        <div className='home-intro'>
                            <FadeInWhenVisible duration={.25}>
                                <h3 className='hero-intro'><i>Hi, my name is</i></h3>
                            </FadeInWhenVisible>

                            <div className="typewriter-container">
                                <div className="typewriter-effect">
                                    <h1 className='hero-name'>Kaleb Giger</h1>
                                </div>
                            </div>
                            <FadeInWhenVisible duration={.5}>
                                <h3 className='hero-subtitle'>I'm a software engineer based in Princeton, New Jersey</h3>
                            </FadeInWhenVisible>
                        </div>
                        <FadeInWhenVisible duration={.75}>
                            <Button className='about-button' as={AnchorLink} smooth to="/#about" variant="outline-primary">About me</Button>
                        </FadeInWhenVisible>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}