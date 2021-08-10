import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel'

export function PortfolioTemplate(props) {

    const { title, description, subtitle, mainImage, images, alternate, company } = props;
    const [open, setOpen] = useState(false);

    return (
        <div>
            {/* {alternate ? */}
            <Row className={alternate ? 'row-container--alt' : 'row-container'}>
                <Col className='project-description-column-container'>
                    <div className={!open && alternate ? 'project-description-column--alt' : 'project-description-column'}>
                        <h2>{title}</h2>
                        <h4 className='company-name'>{company}</h4>
                        <Collapse in={open}>
                            <p className='project-description'>
                                {description}
                            </p>
                        </Collapse>
                        <Button
                            onClick={() => setOpen(!open)}
                            variant='outline'
                            className='btn btn-outline-primary'
                        >
                            {open ? 'Read less' : 'Read more'}
                        </Button>
                    </div>
                </Col>
                <Col className="col-image-container">
                    {open ?
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
                            <GatsbyImage image={getImage(mainImage)} alt={title} className="portfolio-image" />
                            {/* <Image className="portfolio-image" src={mainImage} /> */}
                            <div className="screen-line" />
                            <div className="image-overlay" />
                        </div>
                    }
                    {/* <div className="portfolio-image-overlay" /> */}

                </Col>
            </Row>
            {/* :
                <Row className='project-row'>
                    <Col className="col-image-container">
                        {open ?
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
                                <GatsbyImage image={getImage(mainImage)} alt={title} className="portfolio-image" />
                                <div className="screen-line" />
                                <div className="image-overlay" />
                            </div>
                        }
                    </Col>
                    <Col className='project-description-column-container'>
                        <div className={!open && 'project-description-column'}>
                            <h2>{title}</h2>
                            <h4 className='company-name'>{company}</h4>
                            <Collapse in={open}>
                                <p className='project-description'>
                                    {description}
                                </p>
                            </Collapse>
                            <Button
                                onClick={() => setOpen(!open)}
                                variant='outline'
                                className='btn btn-outline-primary'
                            >
                                {open ? 'Read less' : 'Read more'}
                            </Button>
                        </div>
                    </Col>

                </Row> */}
            {/* } */}

        </div>
    )
}