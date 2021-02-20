import React from 'react';
import Header from '../../components/header'
import Profile from '../../components/intro/profile';

// Home Page.
class landpage extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Profile/>
      </div>
    )
  }
}

export default landpage;
