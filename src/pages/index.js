import React from "react"
import Layout from "../components/Layout"
import PostList from "../components/PostList"
import * as styles from "../css/home.module.css"
import { graphql, useStaticQuery } from "gatsby"
import TagList from "../components/TagList"

const getPosts = graphql`
{
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        totalCount
        edges {
            node {
            frontmatter {
                title
                slug
                date(formatString: "MMMM Do, YYYY")
                author
                tags
                image {
                childImageSharp {
                    fluid {
                    ...GatsbyImageSharpFluid_withWebp
                    }
                }
              }
            }
            excerpt
          }
        }
    }
}
`

export default function Home() {
  const response = useStaticQuery(getPosts)
  const posts = response.allMdx.edges
  console.log(response)
  return (
    <Layout>
      <div className={styles.home}>
        <section className={styles.right__sec}>
          <TagList tags={posts} />
        </section>
        <section className={styles.blog__sec}>
          <PostList posts={posts} />
        </section>
        <section className={styles.left__sec}></section>
      </div>
    </Layout>
  )
}
