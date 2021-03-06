import React, { Component, Fragment } from 'react'
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import './App.css';

import Header from './components/header';
import Main from './containers/main';
import Footer from './components/footer';
import UserRoutes from './components/userRoutes'

export const store = createStore(reducers, applyMiddleware(thunk));

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
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
    if (this.state.isOpen && !this.state.firstTime){
      this.setState({
        isOpen: true
      })
      return;
    }
    this.setState({
      isOpen : !this.state.isOpen,
    })
  }
  render(){
    return (
      <Provider store={store}>
        <Fragment>
          <Header/>
          <BrowserRouter>
            <Fragment>
              <Main toggleModal={this.toggleModal}/>
              <UserRoutes isOpen={this.state.isOpen} toggleModal={this.toggleModal}/>
            </Fragment>
          </BrowserRouter>
          <Footer/>
        </Fragment>
      </Provider>
    );
  }
}

export default App;
