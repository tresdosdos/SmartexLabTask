import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import './modalWindow.css';
import { connect } from 'react-redux';
import UserData from '../userData'

class ModalWindow extends Component{
  constructor(props){
    super(props);
    this.state={
      show: this.props.show,
      counter: 0,
      isReady: false
    }
  }
  componentDidMount(){
    this.setState({
      isReady: true
    });
  }
  render(){
     if (!this.props.show ) return null;
     let data;
     if (this.state.isReady) data = this.props.store.users.data[this.props.userID - 1];
     else data = null;
    return (
      <div className="modal__window__backdrop">
        <div className="modal__window">
          {data ? (
            <Fragment>
              <UserData data={data}/>
            </Fragment>
          ) : (null)}
          <div className="footer">
            <Link to='/' onClick={this.props.onClose}>Close</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({store: state}),
  dispatch => ({
  })
)(ModalWindow);