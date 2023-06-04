import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = index => {
    this.setState({
      activeOptionIdx: index,
    });
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
  };

  render() {
    // Деструктуризація пропів
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    // Властивість, що обчислюється на базі пропів і стейту
    const { label } = options[activeOptionIdx];
    // console.log(label);

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Обраний колір: {label}</p>
        <div>
          {options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{
                backgroundColor: color,
                // border:
                //   index === this.state.activeOptionIdx
                //     ? '5px solid black'
                //     : 'none',
              }}
              //Анонімний callback, Замикання
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
