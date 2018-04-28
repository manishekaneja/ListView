import React, { Component } from 'react';
import { Main } from './components/main';
import y from './components/products';

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: y,
      show: true
    }
  }
  render() {
    return (
      <div id="container" className="container" >
        <div style={{ textAlign: "center", backgroundColor: 'white', position: 'fixed', width: '100%', top: '0px', left: '0px', height: '100px' }}>
          <div>
            <select style={{ margin: '1em', backgroundColor: 'white' }} className="btn btn-default" onChange={(e) => {
              switch (e.target.value) {
                case 'st': this.setState({ list: y.filter((ele) => { return (ele.isSale === true); }) })
                  break;
                case 'oe': this.setState({ list: y.filter((ele) => { return (ele.isExclusive === true); }) })
                  break;
                case 'ef': this.setState({ list: y.sort((ele, ele2) => ele.price > ele2.price ? -1 : 1) })
                  break;
                case 'bs': this.setState({ list: y.sort((ele, ele2) => ele.price >= ele2.price ? 1 : -1) })
                  break;
                case 'as': this.setState({ list: y.sort((ele, ele2) => { return (ele.size.length >= ele2.size.length) ? -1 : 1; }) })
                  break;
                default: this.setState({ list: y })
                  break;
              }
            }} >
              <option value="sa">Show All</option>
              <option value="st">Sale Target</option>
              <option value="oe">Only Exclusives</option>
              <option value="ef">Expensive first</option>
              <option value="bs">Budget Search</option>
              <option value="as">According to Size</option>
            </select>
            <button className={'btn btn-success'} onClick={() => { this.setState({ show: !this.state.show }) }}>{this.state.show === true ? 'Hide Details' : 'Show Details'}</button>

          </div>
          <div className="container">
            <input placeholder="Search any item" className={"form-control"} onKeyUp={(e) => { this.setState({ list: y.filter((ele) => ele.productName.toLowerCase().includes(e.target.value.toLowerCase())) }) }} />
          </div>
        </div>
        <div style={{ marginTop: '100px' }}>
          <Main list={this.state.list} show={this.state.show} />

        </div>
      </div >
    );
  }
}

export default App;
