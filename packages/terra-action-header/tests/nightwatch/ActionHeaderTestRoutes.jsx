/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import ActionHeaderTests from './ActionHeaderTests';

// Test Cases
import DefaultActionHeader from './DefaultActionHeader';

const routes = (
  <div>
    <Route path="/tests/action-header-tests" component={ActionHeaderTests} />
    <Route path="/tests/action-header-tests/default-action-header" component={DefaultActionHeader} />
  </div>
);

export default routes;
