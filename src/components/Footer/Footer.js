import React from 'react';
import styles from './Footer.css'

function Footer() {
    const links = {
      homepage: 'https://github.com/karuto',
      github: 'https://github.com/karuto/github-static-site-template',
      email: 'mailto:hi@vincentzh.com'
    };

    return (
        <footer className={styles.footer}>
            Made by <a href={links.homepage}>Vincent Zhang.</a>
            &nbsp;Find this project on <a href={links.github}>GitHub</a>
            &nbsp;or write me an <a href={links.email}>email.</a>
        </footer>
    );
};

export default Footer;
