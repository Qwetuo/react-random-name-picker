import React, { Component } from 'react';
import ButtonOne from "./ButtonOne";
import math from "mathjs";
import ShowNames from "./ShowNames"

class App extends Component {
  constructor(){
    super();
    this.state = {
      names: ["gordon","sahil","david","sally","jane","alice"],
      luckyWinnerIndex: null
    };
  }
  render() {
    return (
      <div>
        <h1 id="app-title">hello random name picker</h1>
        {/* <ul>
          {this.state.names.map((name,i) => {
            if (this.state.luckyWinnerIndex === i) {
              return <li id="winner">{name}</li>
            } else {
              return <li>{name}</li>
            }
          })}
        </ul> */}
        <ShowNames input={this.state} />
        <ButtonOne handleClick={() => this.handleClick()} />
        <br />
        {/* <button onClick={()=> this.startNewList()}>Start you own list</button> */}
      </div>
    );
  }
  handleClick() {
    const random = math.randomInt(this.state.names.length)
    this.setState({
      luckyWinnerIndex: random
    })
  }
}

export default App;