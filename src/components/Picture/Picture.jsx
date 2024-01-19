import React from 'react';
import styles from './Picture.module.css';

const Picture = ({date, title, explanation, url, hdurl, copyright}) => {
    return (
        <div className={styles.pictureContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={url} alt={title}/>
            </div>
            <div className={styles.contentContainer}>
                <h2 className={styles.title}>{title}</h2>
                <p className={styles.date}>{date}</p>
                <p className={styles.explanation}>{explanation}</p>
                <p className={styles.copyRight}>© {copyright}</p>
                <a className={styles.hdLink} href={hdurl} target="_blank" rel="noopener noreferrer">
                    View HD Image
                </a>
            </div>
        </div>
    );
};

export default Picture;