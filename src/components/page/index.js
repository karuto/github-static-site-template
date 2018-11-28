import React from 'react';
import Container from '../container';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container container--global'>
                <div className='overlay'>
                    <header className='titles'>
                        <h1 className='heading heading--titles'>GitHub Static Site Template</h1>
                        <h3 className='subheading subheading--titles'>A React-based template for GitHub Pages. Start editing away!</h3>
                    </header>
                </div>
                <div className='container container--contents'>
                    <h2>
                    Complete this component
                    </h2>
                    <div>
                    <ul>
                        <li>The dropdown menu should contain values 1, 2, 3, 4.</li>
                        <li>The button text should reflect the currently selected dropdown menu value.</li>
                        <li>The table slot should display after button click, reflecting the same value.</li>
                        <li>You can get another table slot with another button click.</li>
                        <li>Bonus: create a fake "pending" state where it attempts to make an ajax call.</li>
                        <li>Bonus: create a simple "modal / popup" after clicking on the table slot.</li>
                    </ul>
                    </div>
                    <h3>&nbsp;</h3>
                    <Container />
                    <h3>&nbsp;</h3>
                </div>
                <footer className='container'>
                    Made by <a href='https://github.com/karuto'>Vincent Zhang.</a>
                    &nbsp;Find this project on <a href='https://github.com/karuto/github-static-site-template'>GitHub</a>
                    &nbsp;or write me an <a href='mailto:hi@vincentzh.com'>email.</a>
                </footer>
            </div>
        );
    }
}

export default Page;
