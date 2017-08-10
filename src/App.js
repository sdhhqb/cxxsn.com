import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import './style.scss';
import Nav from './components/common/nav';
import Home from './components/home';
import Population from './components/population';
// lazy load 测试
import TestLazy from './components/test/lazy';

class App extends Component {
  constructor(props) {
    super(props);

    this.manualRedirect = this.manualRedirect.bind(this);
  }

  manualRedirect() {
    this.props.history.push('/test');
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Route path="/" component={Nav}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/population" component={Population}></Route>
          <Route path="/test" component={TestLazy}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
