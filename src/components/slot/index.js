import React from 'react';

export default class Slot extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.data)
        let text = 'pending';
        if (parseInt(this.props.data)) {
            text = 'Table for ' + this.props.data;
        } else {
            text = this.props.data;
        }
        return (
            <button>
                {text}
            </button>
        );
    }
}