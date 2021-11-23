import React from 'react';
import Numbers from "./Numbers";

class NumberCounter extends React.Component {
  suffix;
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  tick() {
    if(this.state.count < 100) this.setState(state => ({
      count: state.count + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 10);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="NumberCounter">
        <span className="counter">{Math.ceil(this.props.number - (1- (this.state.count / 100)) * this.props.number)}</span><span className="counterSuffix">{this.props.suffix}</span>
      </div>
    );
  }
}

export default NumberCounter;
