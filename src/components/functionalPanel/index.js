import React, { Component } from 'react';
import './functionalPanel.css';
import ModalWindow from '../../containers/modalWindow';
import { Link } from 'react-router-dom';
import fullscreen from './fullscreen.svg';

export default class FunctionalPanel extends Component{
  render(){
    return (
      <div className='user__card__func__panel'>
        <Link to={'/user' + this.props.userID} className='user__card__func__panel__button' onClick={this.props.toggleModal}><img src={fullscreen} alt='fullScreen' className='user__card__func__panel__full'/></Link>
      </div>
    )
  }
}