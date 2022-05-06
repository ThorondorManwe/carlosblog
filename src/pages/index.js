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
  const response = useStaticQuery(getPosts);
  const allPosts = response.allMdx.edges;
  const emptyQuery = "";
  const [state, setState] = React.useState({
      filteredData: [],
      query: emptyQuery
  });
  const handleInputChange = event => {
    const query = event.target.value;
    const posts = response.allMdx.edges || [];
    const filteredData = posts.filter(post => {
        const { title, tags, author } = post.node.frontmatter;
        const { excerpt } = post.node;
        return (
            author.toLowerCase().includes(query.toLowerCase()) ||
            excerpt.toLowerCase().includes(query.toLowerCase()) ||
            title.toLowerCase().includes(query.toLowerCase()) ||
            tags.join("").toLowerCase().includes(query.toLowerCase())
        )
    });
    setState({
        query,
        filteredData
    })
  };
  const { filteredData, query } = state;
  const hasSearchResults = filteredData && query !== emptyQuery;
  const posts = hasSearchResults ? filteredData : allPosts;
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
        <section className={styles.left__sec}>

          {/* En el proyecto original está en la sección de bog pero yo lo quiero aqui */}
          <div className={styles.searchBox}>
            <input
              className={styles.searchInput}
              type="text"
              id="filter"
              placeholder="Buscar entradas..."
              onChange={handleInputChange}
            />
          </div>

        </section>
      </div>
    </Layout>
  )
}
