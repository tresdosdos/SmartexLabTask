import React, { Component } from 'react';
import './functionalPanel.css';
import { Link } from 'react-router-dom';
import fullScreen from './fullscreen.svg';

export default class FunctionalPanel extends Component{
  render(){
    return (
      <div className='user__card__func__panel'>
        <Link to={'/user' + this.props.userID} className='user__card__func__panel__button' onClick={this.props.toggleModal}>
          <img src={fullScreen} alt='fullScreen' className='user__card__func__panel__full'/>
        </Link>
      </div>
    )
  }
}