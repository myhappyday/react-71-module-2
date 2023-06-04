import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  // show = () => {
  //   this.setState({
  //     visible: true,
  //   });
  // };

  // hide = () => {
  //   this.setState({
  //     visible: false,
  //   });
  // };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;

    return (
      <div className="dropdown">
        {/* <button type="button" className="dropdown-toggle" onClick={this.show}>
          Показати
        </button> */}

        {/* <button type="button" className="dropdown-toggle" onClick={this.hide}>
          Приховати
        </button> */}
        <button type="button" className="dropdown-toggle" onClick={this.toggle}>
          {visible ? 'Приховати' : 'Показати'}
        </button>

        {visible && <div className="dropdown-menu">Випадаюче меню</div>}
      </div>
    );
  }
}

export default Dropdown;
