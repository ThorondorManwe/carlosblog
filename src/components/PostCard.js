import React from 'react'
import Image from "gatsby-image"
import * as styles from "../css/postcard.module.css"
import { Link } from "gatsby"
import { kebabCase } from 'lodash'

const PostCard = ({ post }) => {
  const { title, date, author, slug, tags } = post.frontmatter
  const img = post.frontmatter.image.childImageSharp.fluid
  return (
    <article className={styles.card}>
      <div className={styles.image}>
        <Image fluid={img} />
      </div>
      <div className={styles.info}>
        <div>
          <h2>{title}</h2>
          <h5>
            <span>por {author}</span> /<span>{date}</span>
          </h5>
          <h4>
          {tags.map((tag, index) => <Link to={`/tags/${kebabCase(tag)}`}
                                            key={index} className={styles.tagLink}>#{tag} </Link>)
                        }
          </h4>
          <p>{post.excerpt}</p>
          <Link to={slug} className={styles.link}>
            Leer más
          </Link>
        </div>
      </div>
    </article>
  )
}
export default PostCard