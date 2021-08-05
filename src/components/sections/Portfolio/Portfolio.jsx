import { graphql, useStaticQuery } from "gatsby";
import React from 'react';
import Container from 'react-bootstrap/Container';
import { PortfolioTemplate } from './PortfolioTemplate';

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
              mainImage {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              company
            }
            html
          }
        }
      }
    }
  `);

  const projects = data.projects.edges.filter(({ node }) => node);

  const projectInner = (node, index) => {
    const { frontmatter, html } = node;
    const { title, subtitle, description, mainImage, company } = frontmatter;

    return (
      <PortfolioTemplate
        mainImage={mainImage}
        images={mainImage}
        subtitle={subtitle}
        description={description}
        title={title}
        alternate={index % 2 ? true : false}
        company={company}
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
        {projects && projects.map(({ node }, index) => (
          <div key={index}>{projectInner(node, index)}</div>
        ))}
      </div>
    </Container>
  );
}