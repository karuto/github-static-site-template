import React from 'react';
import Footer from '../footer';
import '../../styles/app.css';
import '../../styles/normalize.css';

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
            <div className='container container--global'>
                <div className='overlay'>
                    <header className='titles'>
                        <h1 className='heading heading--titles'>{this.strings.headingGlobal}</h1>
                        <h3 className='subheading subheading--titles'>{this.strings.subheadingGlobal}</h3>
                    </header>
                </div>
                <div className='container container--contents'>
                    {this.config.isContentVisible ? <h1>Hello {this.strings.headingGlobal}</h1> : null}
                </div>
                <Footer />
            </div>
        );
    }
}

export default Page;
