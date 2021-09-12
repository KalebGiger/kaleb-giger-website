import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Collapse from 'react-bootstrap/Collapse';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel'
import { FaGithub } from '@react-icons/all-files/fa/FaGithub';
import { FaExternalLinkAlt } from '@react-icons/all-files/fa/FaExternalLinkAlt';

// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";

export function PortfolioTemplate(props) {

    const { title, description, subtitle, mainImage, images, alternate, company, tech, github, website } = props;
    const [open, setOpen] = useState(false);

    return (
        <div>
            {/* {alternate ? */}
            <Row className="justify-content-md-center" className={alternate ? 'row-container--alt' : 'row-container'}>
                {images &&
                    <Col lg={images ? 6 : 12} md={12} className="col-image-container">
                        {open ?
                            <Carousel
                                nextLabel=''
                                prevLabel=''
                                indicators={true}
                                controls={true}
                            >
                                {images && images.map((image, index) => {
                                    return (
                                        <Carousel.Item>
                                            <GatsbyImage image={getImage(image)} alt={image} />
                                        </Carousel.Item>
                                    )
                                })}
                            </Carousel>
                            :
                            <div>
                                <GatsbyImage image={getImage(mainImage)} alt={title} className="portfolio-image" />
                                {/* <Image className="portfolio-image" src={mainImage} /> */}
                                {/* <div className="screen-line" />
                            <div className="image-overlay" /> */}
                            </div>
                        }
                        {/* <div className="portfolio-image-overlay" /> */}

                    </Col>
                }
                <Col lg={images ? 6 : 12} md={12} className='project-description-column-container'>
                    <div
                        className={(!open && alternate && images) ? 'project-description-column--alt' : open && images ? 'project-description-column-alt--open' : images && 'project-description-column'}
                    >
                        <h2>{title}</h2>
                        <h4 className='company-name'>{company}</h4>
                        <div className='tech-container'>
                            {tech && tech.length > 0 && tech.map((t, index) => {
                                return (
                                    <p className={index != 0 && 'tech'}>
                                        {t}
                                    </p>
                                )
                            })}
                        </div>
                        <Collapse in={open}>
                            <p className='project-description'>
                                {description}
                            </p>
                        </Collapse>
                        <div className='read-button'>
                            <Button
                                onClick={() => setOpen(!open)}
                                variant='outline'
                                className='btn btn-outline-primary'
                            >
                                {open ? 'Read less' : 'Read more'}
                            </Button>
                        </div>

                        {(github || website) &&
                            <div className='project-link-container'>
                                {github &&
                                    <a className='project-link-github' target="_blank" href={github} >
                                        <FaGithub />
                                    </a>
                                }
                                {website &&
                                    <a className='project-link' target="_blank" href={website}>
                                        <FaExternalLinkAlt />
                                    </a>
                                }
                            </div>
                        }
                        {/* <AiFillGithub /> */}
                    </div>
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