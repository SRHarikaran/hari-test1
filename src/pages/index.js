import React from 'react';
import Display from '../components/display';

// Home Page.
class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      i: 1
    };
  }

  onIncrement = () => {
    this.setState({ i: this.state.i + 1 });
  }

  render() {
    return (
      <div>
        <Display i={this.state.i} increment={this.onIncrement} />
      </div>
    )
  }
}

export default HomePage;
