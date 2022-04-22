import React, { Component } from "react";
import "../src/index.css";
import "../src/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
    };

    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);
  }
  vai() {
    alert("ola");
  }
  limpar() {
    alert("ola");
  }

  render() {
    return (
      <div className="container">
        <img src={require("./assets/cronometro.png")}></img>
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a onClick={this.vai} className="botao">
            VAI
          </a>
          <a  onClick={this.limpar}className="botao">LIMPAR</a>
        </div>
      </div>
    );
  }
}

export default App;
