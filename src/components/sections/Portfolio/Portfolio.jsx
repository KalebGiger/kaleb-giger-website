import { graphql, useStaticQuery } from "gatsby";
import React from 'react';
import Container from 'react-bootstrap/Container';
import { PortfolioTemplate } from './PortfolioTemplate';
import { FadeInWhenVisible } from '../../shared/FadeInWhenVisible'

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
              github
              website
              description
              mainImage {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              images {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
              }
              company
              tech
             
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
    const { title, subtitle, description, mainImage, company, images, tech, github, website } = frontmatter;

    return (
      <PortfolioTemplate
        mainImage={mainImage}
        images={images}
        subtitle={subtitle}
        description={description}
        title={title}
        alternate={index % 2 ? true : false}
        company={company}
        tech={tech}
        github={github}
        website={website}
      />
    );
  };

  return (
    <Container className="portfolio-page-container">
      <FadeInWhenVisible duration={.25}>
        <div className="typewriter-container">
          <div className="typewriter-effect">
            <h1 className='page-header'>Portfolio</h1>
          </div>
        </div>
      </FadeInWhenVisible>

      <div className="portfolio-content">
        {projects && projects.map(({ node }, index) => (
          <div key={index}>{projectInner(node, index)}</div>
        ))}
      </div>
    </Container>
  );
}