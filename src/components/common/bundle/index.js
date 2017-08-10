import React from 'react';

class Bundle extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mod: null
    };
  }

  componentWillMount() {
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  load(props) {
    this.setState({
      mode: null
    });

    props.load((mod) => {
      this.setState({
        mod: mod.default ? mod.default : mod
      });
    });
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : this.props.children(null);
  }
}

export default Bundle;
