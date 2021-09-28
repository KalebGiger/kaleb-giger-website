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

export function Contact() {

    function handleOpenContact() {
        window.location.href = `mailto:kalebrgiger@gmail.com`;
    }

    return (
        <Container className='contact-page-container'>
            <FadeInWhenVisible duration={.25}>
                <div className="typewriter-container">
                    <div className="typewriter-effect">
                        <h1 className='page-header'>Contact</h1>
                    </div>
                </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible duration={.5}>
                <p className='bio'>
                    If you would like to get in touch with me, please email me at <a href={'mailto:kalebrgiger@gmail.com'}>kalebrgiger@gmail.com</a>.
                </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible duration={.75}>
                <Button
                    onClick={() => handleOpenContact()}
                    variant='outline'
                    className='btn btn-outline-primary contact-button'
                >
                    Contact
                </Button>
            </FadeInWhenVisible>
        </Container>
    );
}