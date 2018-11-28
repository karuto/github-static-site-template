import React from 'react';

export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        const selected = e.currentTarget;
        const selectedData = selected.options[selected.selectedIndex].value;
        this.props.handler(selectedData);
    }

    render() {
        return (
            <select onChange={this.handleChange}>
                {this.props.data.map(datum => {
                    return <option key={datum} value={datum}>{datum} {(datum === 1) ? 'person' : 'people'}</option>;
                })}
            </select>
        );
    }
}