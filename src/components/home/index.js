import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: 'home'
    };
  }

  render() {
    return (
      <div className="home">home page </div>
    );
  }
}

export default Home;
