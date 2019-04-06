import React from 'react';
import Footer from '../Footer/Footer';
import styles from './Page.css';

class Page extends React.Component {
    constructor(props) {
        super(props);

        this.config = {
            isContentVisible: true
        };

        this.strings = {
            headingGlobal: 'GitHub Static Site Template',
            subheadingGlobal: 'A React-based template for GitHub Pages. Start editing away!'
        };
    }

    render() {
        return (
            <div className={styles.container}>
                <div className={styles.overlay}>
                    <header className={styles.titles}>
                        <h1 className={styles['heading--titles']}>{this.strings.headingGlobal}</h1>
                        <h3 className={styles['subheading--titles']}>{this.strings.subheadingGlobal}</h3>
                    </header>
                </div>
                <div className={styles['container--contents']}>
                    {this.config.isContentVisible ? <h1>Hello {this.strings.headingGlobal}</h1> : null}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Page;
