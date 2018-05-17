import React, { Component, Fragment } from 'react'
import thunk from 'redux-thunk';
import { Route, Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import './App.css';

import Header from './components/header';
import Main from './containers/main';

export const store = createStore(reducers, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Fragment>
          <Header/>
          <Main/>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
