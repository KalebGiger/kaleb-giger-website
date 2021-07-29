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

export function About() {
    return (
        <Container className="about-page-container">
            <div className="typewriter-container">
                <div className="typewriter-effect">
                    <h1 className='page-header'>About me</h1>
                </div>
            </div>
            <Row>
                <Col>
                    <div>
                        <p className='bio'>
                            Hi, I'm Kaleb. I'm a full-stack developer with over 5 years of experience in computer science
                            and more than 2 years of software engineering job experience.
                        </p>

                        <p className='bio'>Recent technologies:</p>
                        <Row className='bio'>
                            <Col>
                                <CustomList />
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col className='portrait-container'>
                    <Image src={portrait} roundedCircle />
                </Col>
            </Row>
        </Container>
    );
}