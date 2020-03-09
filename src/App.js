import React, { Component } from "react";
import { connect } from "react-redux";
import { inc, dec , reset } from "./js/actions/actions";

const val = 4;

class App extends Component {
  state = {
    value: 1
  };

  increment = () => this.props.inc(this.state.value);
  decrement = () => this.props.dec(this.state.value);

  render() {
    console.log("my state ", this.props.counter);
    return (
      <center>
        <div>
          <h1>{this.props.counter}</h1>
          <div>
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}> - </button>
            <button
            onClick={this.props.res}
            >RESET</button>
          </div>
          <input
            type="number"
            onChange={e => this.setState({ value: Number(e.target.value) })}
          />
        </div>
      </center>
    );
  }
}
const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inc: payload => dispatch(inc(payload)),
    dec: payload => dispatch(dec(payload)),
    res : ()=> dispatch(reset())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
