import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Nav from './components/common/nav';
import Home from './components/home';
import Test from './components/test';

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
          <Route path="/test" component={Test}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
