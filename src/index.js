import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

// 热加载参考
// https://github.com/gaearon/react-hot-boilerplate/tree/next
// https://webpack.js.org/guides/hot-module-replacement/

const rootEle = document.getElementById('root');
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component></Component>
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
