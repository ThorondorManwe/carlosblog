import React from 'react';
import * as styles from "../css/taglist.module.css"
import { Link } from "gatsby"
const TagList = ({ tags }) => {
    var tmpArr = [];
    tags.forEach(element => {
        tmpArr = [...tmpArr, ...element.node.frontmatter.tags];
    });
    tmpArr = [...new Set(tmpArr)];
    return (
        <section className={styles.tagList}>
            <div className={styles.boxTag}>
                <h2>Etiquetas</h2>
                {tmpArr.map((tag, index) => {
                    return <Link to={`/tags/${tag}`} key={index} className={styles.link}>
                                {tag}
                            </Link>
                })}
            </div>
        </section>
    )
}
export default TagList;