import React from 'react';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                <span className={styles.gradientText}>Dynamic</span> Typography
            </h1>
            <p className={styles.subtitle}>A GSAP & React powered text animation tool</p>
        </header>
    );
};

export default Header;
