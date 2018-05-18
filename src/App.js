import React, { Component, Fragment } from 'react'
import thunk from 'redux-thunk';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import './App.css';

import Header from './components/header';
import Main from './containers/main';
import ModalWindow from './components/modalWindow';

export const store = createStore(reducers, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: -1,
      isOpen: true,
      firstTime: true
    }
  }
  toggleModal = () => {
    this.setState({
      firstTime : false
    })
    if (this.state.firstTime){
      this.setState({
        isOpen : true
      })
      return;
    }
    this.setState({
      isOpen : !this.state.isOpen
    })
  }
  render(){
    console.log(this.state);
    return (
      <Provider store={store}>
        <Fragment>
          <Header/>
          <BrowserRouter>
            <Fragment>
              <Main toggleModal={this.toggleModal}/>
              <Switch>
                <Route exact path='/' render={() => { return <div></div>}}/>
                <Route path={'/user' + 1} render={() => {return <ModalWindow data={1} show={this.state.isOpen} onClose={this.toggleModal}/>}}/>
                <Route path={'/user' + 2} render={() => {return <ModalWindow data={2} show={this.state.isOpen} onClose={this.toggleModal}/>}}/>
              </Switch>
            </Fragment>
          </BrowserRouter>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
