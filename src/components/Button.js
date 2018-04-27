import React from 'react';
export class Button extends React.Component {
    state = {
        click:false
    }
    render() {
        return (
            <button style={{ margin: '1em' }} className={"btn " + (this.state.click === true ? "btn-success" : "btn-warning")} onClick={() => { this.props.func(); this.setState({ click: true }); setTimeout(() => { this.setState({ click: false }) }, 1000) }}>{this.props.title}</button>
        );
    }
}