import React from 'react';
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'
import ArrowDownIcon from '../../../svg/caret-down.svg'
import Carousel from 'react-bootstrap/Carousel'

export function PortfolioTemplate(props) {

    const { title, description, subtitle, mainImage, images, alternate, company } = props;
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
                            <div className={open ? 'project-description-column-open' : 'project-description-column-alt'}>
                                <h2>{title}</h2>
                                <h4>{company}</h4>
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
                            <div>
                                <GatsbyImage image={getImage(mainImage)} alt={title} className="portfolio-image" />
                                {/* <Image className="portfolio-image" src={mainImage} /> */}
                                <div className="screen-line" />
                                <div className="image-overlay" />
                            </div>
                        </Col>
                        <ArrowDownIcon />

                    </Row>
                    :
                    <Row className='project-row'>
                        <Col className="col-image-container">
                            <GatsbyImage image={getImage(mainImage)} alt={title} className="portfolio-image" />
                            {/* <Image className="portfolio-image" src={mainImage} /> */}
                            <div className="screen-line" />
                            <div className="image-overlay" />
                            {/* <div className="portfolio-image-overlay" /> */}
                        </Col>
                        <Col className='project-description-column-container'>
                            <div className={open ? 'project-description-column-open' : 'project-description-column'}>
                                <h2>{title}</h2>
                                <h4>{company}</h4>
                            </div>
                        </Col>
                        <ArrowDownIcon />
                    </Row>
                }
            </Button>
            <Collapse in={open}>
                <p className='project-description'>
                    {description}
                </p>
            </Collapse>
        </div>
    )
}