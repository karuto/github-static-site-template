import React from 'react';
import styles from './Footer.css'

export default function Footer() {
    const links = {
      homepage: 'https://github.com/karuto',
      github: 'https://github.com/karuto/github-static-site-template',
      email: 'mailto:hi@vincentzh.com'
    };

    const content = (
        <div>
            Made by <a href={links.homepage}>Vincent Zhang.</a>
            &nbsp;Find this project on <a href={links.github}>GitHub</a>
            &nbsp;or write me an <a href={links.email}>email.</a>
        </div>
    );

    return (
        // <footer className='container foo'>
        <footer className={styles.foo}>
            {content}
        </footer>
    );
};
