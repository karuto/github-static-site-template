import React from 'react';
import Button from '../button';
import Dropdown from '../dropdown';
import Slot from '../slot';

export default class Container extends React.Component {
    constructor(props) {
        super(props);
        const DEFAULT_DATA = 1;
        this.state = {
            selectedData: DEFAULT_DATA,
            slotData: null,
            isAjax: false
        };

        this.handleDataChange = this.handleDataChange.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.clickButton = this.clickButton.bind(this);
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        const DEFAULT_DATA = 1;
        this.handleDataChange(DEFAULT_DATA);
    }

    getStaticData() {
        return [1, 2, 3, 4];
    }

    handleDataChange(data) {
        console.log('changed');
        this.setState({selectedData: data});
    }
    handleCheck(e) {
        console.log('check', e.currentTarget.value);
        this.setState({isAjax: true});
    }

    getData() {
        const data = 'some async data';
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 2000);
        });
      }

    clickButton() {
        console.log('clicked', this.state);
        if (this.state.isAjax) {
            this.setState({slotData: 'pending...'});
            this.getData().then(data => {
                this.setState({slotData: data});
            });
        } else {
            this.setState(prevState => {
                return {slotData: prevState.selectedData};
            });
        }
    }

    render() {
        const slot = this.state.slotData ? <Slot data={this.state.slotData} /> : null;
        return (
            <div>
                <Dropdown data={this.getStaticData()} handler={this.handleDataChange} />
                <Button selectedData={this.state.selectedData} handler={this.clickButton} />
                {slot}
                <br/>
                <br/>
                <input type='checkbox' onChange={this.handleCheck} value='isAjax' checked={this.state.isAjax} /> Mock Ajax
            </div>
        );
    }
}