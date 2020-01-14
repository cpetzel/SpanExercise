import React from 'react';
import {Provider} from 'react-redux';

import Main from './Main';

import rootStore from '../store';

export default () => (
  <Provider store={rootStore}>
    <Main />
  </Provider>
);
