import React from "react";
import './grid.css';

export class Block extends React.Component {

    notDone(message, e) {
        e.target.disabled = true;
        alert(message);
        e.target.disabled = false;

    }
    render() {
        return (
            <div className={"g " + (this.props.show === true ? 'gridShow' : 'gridDontshow')} style={{ margin: '2em', gridGap: "2em", backgroundColor: 'lightblue', padding: '1em' }}>
                <div>
                    <img src={"/images/" + this.props.ele.productImage} alt="no" style={{ width: '100%', height: '100%' }} />
                </div>
                <div>
                    <span style={{ backgroundColor: 'rgba(255,0,0,0.8)', color: 'white', fontWeight: '900', display: 'block', padding: '0.5em', margin: '1em  0.2em' }}>
                        => {this.props.ele.productName}
                    </span>
                    <span style={{ display: (this.props.show === true ? 'block' : 'none'), backgroundColor: 'lightgreen', fontWeight: '900', padding: '0.5em', margin: '1em  0.2em' }}>
                        Size : {this.props.ele.size}
                    </span>
                    <span style={{ backgroundColor: 'blue', color: 'white', fontWeight: '900', display: 'block', padding: '0.5em', margin: '1em 0.2em' }}>
                        Amount for this is {this.props.ele.price} only
                                </span>
                    <div style={{ textAlign: "center", display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridGap: '0.5em' }}>
                        <button className="btn btn-default " style={{ width: '100%' }} onClick={this.notDone.bind(this, "You Will be able to do that after full implementation")} > Purchase </button>
                        <button className="btn btn-default " style={{ width: '100%' }} onClick={this.notDone.bind(this, "You Will be able to do that after full implementation")}>  Add To Cart </button>
                        <button className="btn btn-default " style={{ width: '100%' }} onClick={this.notDone.bind(this, "No furter Details available right now")}>  Detailed Info </button>
                    </div>
                </div>
            </div>
        )
    }
}