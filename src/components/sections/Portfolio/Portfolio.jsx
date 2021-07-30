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
import { Link, useStaticQuery, graphql } from "gatsby"

export function Portfolio() {

    const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/projects/" }
          
        }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              title
              subtitle
              description
            }
            html
          }
        }
      }
    }
  `);

    const projects = data.projects.edges.filter(({ node }) => node);

    const projectInner = node => {
        const { frontmatter, html } = node;
        const { title, subtitle, description } = frontmatter;

        return (
            <PortfolioTemplate
                mainImage={voicesImage}
                images={voicesImage}
                subtitle={subtitle}
                description={description}
                title={title}
            />
        );
    };

    return (
        <Container className="portfolio-page-container">
            <div className="typewriter-container">
                <div className="typewriter-effect">
                    <h1 className='page-header'>Portfolio</h1>
                </div>
            </div>

            <div className="portfolio-content">
                {projects && projects.map(({ node }, i) => (
                    <div key={i}>{projectInner(node)}</div>
                ))}
            </div>
        </Container>
    );
}