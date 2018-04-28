import React from 'react';
import './grid.css';
import { Block } from './Block'

export class Main extends React.Component {

    render() {
        return (
            <div className="container">
                <h1>Get your Products</h1>
                <div className={"g " + ((this.props.show === true ? 'gridDontshow' : 'gridShow2'))}>
                    {this.props.list.map((ele, index) => {
                        return (
                            <Block  show={this.props.show} key={"main" + index} ele={ele} />
                        )
                    })}
                </div>
            </div>





        )
    }
}