import React, { Component } from 'react';
import './functionalPanel.css';

export default class FunctionalPanel extends Component{
  render(){
    return (
      <div className='user__card__func__panel'>
        <button className='user__card__func__panel__button1'>Full screen</button>
        <button className='user__card__func__panel__button2'>Favorite</button>
      </div>
    )
  }
}