import React from 'react';
import loadTest from 'bundle-loader?lazy!./index';
import Bundle from '../common/bundle';

function TestLazy(props) {
  return (
    <Bundle load={loadTest}>
      {(Comp) => (Comp
        ? <Comp {...props} />
        : <div>loading...</div>
      )}
    </Bundle>
  );
}

export default TestLazy;
