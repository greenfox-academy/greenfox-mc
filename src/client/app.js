'use strict';

import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { Router, Route } from 'react-router';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux'

injectTapEventPlugin();

function App(Root, Admin, StoreService, History) {
  const customHistory = History.getHistory();
  const middleware = [ thunk, routerMiddleware(customHistory) ]
  const store = createStore(StoreService, applyMiddleware(...middleware));
  const history = syncHistoryWithStore(customHistory, store)

  return (
    <Provider store={store}>
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Router history={history}>
          <Route path="/" component={Root} />
          <Route path="/admin" component={Admin} />
        </Router>
      </MuiThemeProvider>
    </Provider>
  )
}

App.deps = ['Root', 'Admin', 'Store', 'History'];
module.exports = App;
