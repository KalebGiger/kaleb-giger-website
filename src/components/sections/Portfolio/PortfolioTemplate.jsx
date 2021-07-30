import React from 'react';
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import ArrowDownIcon from '../../../svg/caret-down.svg'
import Carousel from 'react-bootstrap/Carousel'

export function PortfolioTemplate(props) {

    const { title, description, mainImage, images, alternate } = props;
    const [open, setOpen] = useState(false);

    return (
        <div className='image-container'>
            <Button
                onClick={() => setOpen(!open)}
                variant=''
            >
                {alternate ?
                    <Row className='project-row'>
                        <Col className='project-description-column-container'>
                            <div className='project-description-column-alt'>
                                <h2>{title}</h2>
                                <h3>{description}</h3>
                            </div>
                        </Col>
                        <Col className="col-image-container">
                            {/* {open ?
                                <Carousel>
                                    {images && images.map((image, index) => {
                                        return (
                                            <Carousel.Item>
                                                <img
                                                    className="d-block w-100"
                                                    src={image}
                                                    alt="First slide"
                                                />
                                             
                                            </Carousel.Item>
                                        )
                                    })}
                                </Carousel>
                                :
                                <div>
                                    <Image className="portfolio-image" src={mainImage} />
                                    <div className="screen-line" />
                                    <div className="image-overlay" />
                                </div>
                            } */}
                            {/* <div className="portfolio-image-overlay" /> */}
                        </Col>
                    </Row>
                    :
                    <Row className='project-row'>
                        <Col className="col-image-container">
                            <Image className="portfolio-image" src={mainImage} />
                            <div className="screen-line" />
                            <div className="image-overlay" />
                            {/* <div className="portfolio-image-overlay" /> */}
                        </Col>
                        <Col className='project-description-column-container'>
                            <div className={open ? 'project-description-column-open' : 'project-description-column'}>
                                <h2>{title}</h2>
                                <h3>{description}</h3>
                            </div>
                        </Col>
                        <ArrowDownIcon />
                    </Row>
                }
            </Button>
            <Collapse in={open}>
                <p className='project-description'>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                    labore wes anderson cred nesciunt sapiente ea proident.
                </p>
            </Collapse>
        </div>
    )
}