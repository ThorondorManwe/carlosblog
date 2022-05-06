import React from "react"
import * as styles from "../css/postTemplate.module.css"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { FaGithub, FaTwitterSquare, FaDev, FaLinkedin } from "react-icons/fa"
import { kebabCase } from 'lodash'

const postTemplate = ( {data}) => {
  const { title, date, author, twitter, github, dev, linkedin, image, tags, series } = data.mdx.frontmatter;
  const { body } = data.mdx;
  const img = image.childImageSharp.fluid;
  return (
    <Layout>
      <section className={styles.template}>
       <Link to="/" className={styles.link}>
         regresar al inicio
       </Link>
         <div className={styles.info}>
           <h1>{title}</h1>
           <h4>
             <span>por {author}</span> / <span>{date}</span>
           </h4>
           <h5>
                    {tags.map((tag, index) => <Link to={`/tags/${kebabCase(tag)}`}
                                            key={index} className={styles.tagLink}>#{tag} </Link>)
                    }
          </h5>
          <h5 className={styles.seriesText}>
                        {series && <Link to={`/series/${series}`} className={styles.seriesLink}>
                                    Serie: {series}
                                </Link>
                        }
                    </h5>
         </div>
         <Image fluid={img} />
         <div className={styles.content}>
           <MDXRenderer>{body}</MDXRenderer>
         </div>
         <div className={styles.author}>
           <h1>{author}</h1>
           {twitter && <a href={twitter} target="_blank" rel="noopener noreferrer">
                          {<FaTwitterSquare />}</a>}
           {github && <a href={github} target="_blank" rel="noopener noreferrer">{<FaGithub />}</a>}
           {dev && <a href={dev} target="_blank" rel="noopener noreferrer">{<FaDev />}</a>}
           {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer">{<FaLinkedin />}</a>}
         </div>
      </section>
    </Layout>
  )
}
export const query = graphql`
query getPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
        frontmatter {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
            author
            twitter
            github
            dev
            linkedin
            tags
            series
            image {
            childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
        body
    }
}
`
export default postTemplate;