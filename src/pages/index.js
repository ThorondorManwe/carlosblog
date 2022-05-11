import React, {useState, useRef} from "react";
import Layout from "../components/Layout";
import PostList from "../components/PostList";
import * as styles from "../css/home.module.css";
import { graphql, useStaticQuery } from "gatsby";
import TagList from "../components/TagList";
import cover from "../images/posterBlogTech.jpg";
import { FaSortAmountUp, FaSortAmountDown } from "react-icons/fa";
import Menu from "../components/Menu/Menu";
/* import Burger from "../components/Burger/Burger"; */
import { useOnClickOutside } from "../constants/hooks";
import Advert from "../components/Advert";
import RightMenu from "../components/Menu/RightMenu";
import SeriesList from "../components/SeriesList";

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
                series
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
  const [open, setOpen] = useState(false);
  const toggleLeftMenu = () => {
    setOpen(open => !open)
  }
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  const [isOpen, setRight] = useState(false);
  const toggleRightMenu = () => {
      setRight(isOpen => !isOpen)
  }
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
      <div className={styles.mobileMenu}>

          <div ref={node}>
            <button type="button" className={styles.logoBtn} onClick={toggleLeftMenu} >
              <FaSortAmountDown className={styles.logoIcon} />
            </button>
            <Menu open={open} />
          </div>

          <h2 className={styles.mobileHeader}>carlosrangel.net</h2>
          <button type="button" className={styles.logoBtn} onClick={toggleRightMenu}>
            <FaSortAmountUp className={styles.logoIcon} />
          </button>
          <RightMenu open={isOpen} />
      </div>

      <div className={styles.home}>
        <section className={styles.right__sec}>
        

          <TagList tags={posts} />
        </section>

        <section className={styles.blog__sec}>
          
          <div className={styles.searchBox}>
            <input
              className={styles.searchInput}
              type="text"
              id="filter"
              placeholder="Buscar entradas..."
              onChange={handleInputChange}
            />
          </div>

          <PostList posts={posts} />
        </section>

        <section className={styles.left__sec}>       

          <Advert imgPath={cover} />
          <SeriesList seriesList={posts} />

        </section>
      </div>
    </Layout>
  )
}
