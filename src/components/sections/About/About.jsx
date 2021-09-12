import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
// import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import portrait from '../../../images/portrait.png'
import ListGroup from 'react-bootstrap/ListGroup'
import { CustomList } from '../../shared/CustomList/CustomList'
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'

export function About() {
    return (
        <Container className="about-page-container">
            <FadeInWhenVisible duration={.25}>
                <div className="typewriter-container">
                    <div className="typewriter-effect">
                        <h1 className='page-header'>About me</h1>
                    </div>
                </div>
            </FadeInWhenVisible>

            <Row>
                <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
                    <div>
                        <FadeInWhenVisible duration={.5}>
                            <p className='bio'>
                                Hi, I'm Kaleb. I'm a full-stack developer with over 5 years of experience in computer science
                                and more than 2 years of software engineering job experience.
                            </p>
                        </FadeInWhenVisible>
                        <FadeInWhenVisible duration={.75}>
                            <div className="recent-tech">
                                <h5 className='bio'>Recent technologies</h5>
                                <Row className='bio'>
                                    <Col>
                                        <CustomList />
                                    </Col>
                                </Row>
                            </div>
                        </FadeInWhenVisible>
                    </div>
                </Col>
                <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }} className='portrait-container'>
                    <FadeInWhenVisible duration={.35}>
                        <Image src={portrait} roundedCircle />
                    </FadeInWhenVisible>
                </Col>
            </Row>
        </Container>
    );
}