import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';

// IE Promise
import 'core-js/fn/promise';
// IE object.assign
import 'core-js/fn/object/assign';
// polyfill
import "whatwg-fetch";

import './config';
import App from './App';

const history = createHistory();

// 热加载参考
// https://github.com/gaearon/react-hot-boilerplate/tree/next
// https://webpack.js.org/guides/hot-module-replacement/

const rootEle = document.getElementById('root');
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component history={history}></Component>
    </AppContainer>,
    rootEle
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
