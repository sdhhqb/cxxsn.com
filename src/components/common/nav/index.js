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
    this.props.history.push(AppConf.routeRootPath + 'test');
  }

  render() {
    let routeRootPath = AppConf.routeRootPath;

    return (
      <div className="navs">
        <Link to={`${routeRootPath}home`}>home</Link>
        <Link to={`${routeRootPath}population`}>population</Link>
        <Link to={`${routeRootPath}test`}>test</Link>
        <span className="xxx" onClick={this.manualRedirect}>xxx</span>
      </div>
    );
  }
}

export default Nav;
