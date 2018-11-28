import React from 'react';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Find a table for'
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.props.handler();
    }

    render() {
        return (<button onClick={this.handleClick}>{this.state.text} {this.props.selectedData}</button>)
    }
}