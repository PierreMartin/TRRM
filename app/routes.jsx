import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { fetchCoursesRequest } from './api';
import { App, Home, About } from './pages';


export default (store) => {
  /*
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (!authenticated) {
      replace({
        pathname: '/login',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (authenticated) {
      replace({
        pathname: '/'
      });
    }
    callback();
  };
  */

  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} fetchData={fetchCoursesRequest} />
      <Route path="about" component={About} />
    </Route>
  );
};
