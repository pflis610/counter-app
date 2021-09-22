import React, {Component} from 'react';
import './App.css';
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
import Step from './Step';
// import Clock from './Clock';
import ClockFunctional from './ClockFunctional';

class Counter extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counterValue: this.props.initValue,
      stepValue: 1,
      showClock: true,
    };
  }

  updateStep = (value) => {
    this.setState({stepValue: Number(value)}) 
  }

  changeValue = (action) => {

    this.setState((prevState, prevProps) => {
      
    let currentCounterValue = prevState.counterValue;
    let step = this.state.stepValue

    if (action === 'add') {
        currentCounterValue += step;
    } else if (action === 'reinit') {
        currentCounterValue = prevProps.initValue;
    } else {
        currentCounterValue = 0;
    }

      return({
        counterValue: currentCounterValue
      });
    });
  }

  toggleClock = () => {
    this.setState((prevState) => {
      return({
          showClock: !prevState.showClock
      });
    });
  }


  render() {

    let clockElement = '';

    if (this.state.showClock) {
      // clockElement = <Clock
      // toggleClockMethod={this.toggleClock} />;
      clockElement = <ClockFunctional
      toggleClockMethod={this.toggleClock} />;
    } else {
      clockElement = <span onClick={this.toggleClock} className="show-clock">show clock</span>;
    }

    return (
      <div className="counter">
        Counter: 
        <Display displayValue = {this.state.counterValue} />
        <ButtonsPanel inputNumber = {this.state.stepValue} buttonMethod = {this.changeValue} />
        Step x: 
        <Step inputStep = {this.updateStep} />
        {clockElement}
      </div>
      );
  }
}

export default Counter;

