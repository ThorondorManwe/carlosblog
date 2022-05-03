import React from "react"
import Layout from "../components/Layout"
import * as styles from "../css/home.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={styles.home}>
        <section className={styles.right__sec}></section>
        <section className={styles.blog__sec}></section>
        <section className={styles.left__sec}></section>
      </div>
    </Layout>
  )
}
