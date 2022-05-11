import React from 'react';
import * as styles from "../css/advert.module.css";
const Advert = ({ imgPath }) => {
    return (
      <section className={styles.sponserAds}>
        <div className={styles.advert1}>
          <a href="https://www.linkedin.com/in/carlos-rangel-931a5470/" target="_blank" rel="noreferrer noopener">
            <img src={imgPath} className={styles.coverImg} alt="the book cover" />
          </a>
        </div>
      </section>
    )
}
export default Advert;