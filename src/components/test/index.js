import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: 'test'
    };
  }

  render() {
    return (
      <div className="test">test page</div>
    );
  }
}

export default Test;
