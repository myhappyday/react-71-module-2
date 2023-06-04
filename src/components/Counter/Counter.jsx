import React, { Component } from 'react';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    //
  };

  // handleIncrement = event => {
  //   console.log('Click on Increment');
  //   // console.log(event.target);

  //   // const target = event.target;
  //   const { target } = event;

  //   setTimeout(() => {
  //     console.log(target);
  //   }, 1000);
  // };

  // handleDecrement = event => {
  //   console.log('Click on Decrement');
  //   console.log(event);
  // };

  // constructor() {
  //   super();

  //   this.state = {
  //     value: 5,
  //   };
  // }

  // Another variant (Transpiler Babel)

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    // this.setState({
    //   value: this.state.value + 1,
    // });

    // with return
    // this.setState(prevState => {
    //   return { value: prevState.value + 1 };
    // });

    // same without return
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;

    return (
      <div className="counter">
        {/* <span className="counter-value">{this.state.value}</span> */}
        {/* <div className="counter-controls">
          <button type="button" onClick={this.handleIncrement}>
            Increment by 1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            Decrement by 1
          </button>
        </div> */}
        <Value value={value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
