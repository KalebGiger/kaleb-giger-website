import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
// import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import voicesImage from '../../../images/testers.png'
import ListGroup from 'react-bootstrap/ListGroup'
import { PortfolioTemplate } from './PortfolioTemplate'

export function Portfolio() {

    return (
        <Container className="portfolio-page-container">
            <div className="typewriter-container">
                <div className="typewriter-effect">
                    <h1 className='page-header'>Portfolio</h1>
                </div>
            </div>

            <div className="portfolio-content">
                <PortfolioTemplate
                    mainImage={voicesImage}
                    images={voicesImage}
                    description='A PWA developed for WSFS Bank'
                    title='Voices'
                />
                <PortfolioTemplate
                    mainImage={voicesImage}
                    images={voicesImage}
                    description='A PWA developed for WSFS Bank'
                    title='Voices'
                    alternate
                />
                <PortfolioTemplate
                    mainImage={voicesImage}
                    images={voicesImage}
                    description='A PWA developed for WSFS Bank'
                    title='Voices'
                />
            </div>
        </Container>
    );
}