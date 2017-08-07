import React from 'react';
import {
  Link
} from 'react-router-dom';
import './style.scss';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.manualRedirect = this.manualRedirect.bind(this);
  }

  manualRedirect() {
    this.props.history.push('/test');
  }

  render() {
    return (
      <div className="navs">
        <Link to="/">home</Link>
        <Link to="/test">test</Link>
        <span className="xxx" onClick={this.manualRedirect}>xxx</span>
      </div>
    );
  }
}

export default Nav;
