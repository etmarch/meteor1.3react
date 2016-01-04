import React from 'react';
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory, useBasename } from 'history'

const history = useBasename(createHistory)({
  basename: '/'
})


import App from './App.jsx';
import Main from './Layout/Main.jsx';
import AppNotFound from './Layout/AppNotFound.jsx';

var Routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="*" component={AppNotFound}/>
  </Route>
)


Meteor.startup(function() {
  render(
    <Router history={history}>
      {Routes}
    </Router>
    , document.getElementById('app')
  );
});
