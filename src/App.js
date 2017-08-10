import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';
import {
  Router,
  Route
} from 'react-router-dom';

import './style.scss';
import Nav from './components/common/nav';
import Home from './components/home';
import Population from './components/population';
// lazy load 测试
import TestLazy from './components/test/lazy';

const history = createHistory();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    this.githubRedirectChk();
  }

  githubRedirectChk() {
    let search = window.location.search;
    search = search.replace(/^\?/, '').split('&');
    if (search.length) {
      console.log('search :', search);
      let redirect = search[0].split('=');
      if (redirect[0] === 'redirect' && redirect[1] === 'true') {
        let pathname = search[1].split('=')[1];
        pathname = decodeURIComponent(pathname);
        console.log('redirect to : ', pathname);
        history.replace(pathname);
      }
    }
  }

  render() {
    let routeRootPath = AppConf.routeRootPath;

    return (
      <Router history={history}>
        <div className="container">
          <Route path={`${routeRootPath}`} component={Nav}></Route>
          <Route exact path={`${routeRootPath}home`} component={Home}></Route>
          <Route exact path={`${routeRootPath}population`} component={Population}></Route>
          <Route path={`${routeRootPath}test`} component={TestLazy}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
