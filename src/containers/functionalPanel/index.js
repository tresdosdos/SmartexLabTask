import React, { Component } from 'react';
import './functionalPanel.css';
import ModalWindow from  '../../components/modalWindow';
import { Link } from 'react-router-dom';

export default class FunctionalPanel extends Component{
  render(){
    return (
      <div className='user__card__func__panel'>
        <Link to={'/user' + this.props.userID} className='user__card__func__panel__button1' onClick={this.props.toggleModal}>Full screen</Link>
        <button className='user__card__func__panel__button2'>Favorite</button>
      </div>
    )
  }
}