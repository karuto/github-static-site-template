import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import styles from './Page.css';

function Page() {
    const strings = {
        headingGlobal: 'GitHub Static Site Template',
        subheadingGlobal: 'A React-based template for GitHub Pages. Start editing away!'
    };

    const [count, setCount] = useState(0);

    return (
        <div className={styles.container}>
            <div className={styles.overlay}>
                <header className={styles.titles}>
                    <h1 className={styles['heading--titles']}>{strings.headingGlobal}</h1>
                    <h3 className={styles['subheading--titles']}>{strings.subheadingGlobal}</h3>
                </header>
            </div>
            <div className={styles['container--contents']}>
                <h1>Hello world! Count: {count}</h1>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>
            <Footer />
        </div>
    );
}

export default Page;
