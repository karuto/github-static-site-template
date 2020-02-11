import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import styles from './Page.css';

function Page() {
    const strings = {
        headingGlobal: 'GitHub Static Site Template',
        subheadingGlobal: 'A React-based template for GitHub Pages. Start editing away!'
    };

    return (
        <div className={styles.container}>
            <div className={styles.overlay}>
                <header className={styles.titles}>
                    <h1 className={styles['heading--titles']}>{strings.headingGlobal}</h1>
                    <h3 className={styles['subheading--titles']}>{strings.subheadingGlobal}</h3>
                </header>
            </div>
            <div className={styles['container--contents']}>
                <h1>Hello world!</h1>
            </div>
            <Footer />
        </div>
    );
}

export default Page;
