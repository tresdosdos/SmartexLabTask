import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';
import './modalWindow.css';
import { connect } from 'react-redux';
import UserData from '../../components/userData';

import exit from './exit.svg';
import UserCompany from '../../components/company';


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
     let data, lat, lng;
     if (this.state.isReady) {
       data = this.props.store.users.data[this.props.userID - 1];
       if (this.props.store.users.data[this.props.userID - 1]){
         lat = parseFloat(data.address.geo.lat);
         lng = parseFloat(data.address.geo.lng);
       }
     }
     else data = null;
    return (
      <div className="modal__window__backdrop">
        <div className="modal__window">
          {data ? (
            <div className='user__data__container'>
              <UserData data={data} className='modal__window__data'/>
              <UserCompany data={data}/>
            </div>
          ) : (null)}
          <div className="modal__window__exit__container">
            <Link to='/' onClick={this.props.onClose}><img src={exit} alt='exit' className='modal__window__exit'/></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({store: state})
)(ModalWindow);