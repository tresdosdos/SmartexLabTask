import React, { Component } from 'react';
import './userCard.css';
import UserData from '../../components/userData';
import FunctionalPanel from '../functionalPanel';

export default class UserCard extends Component{
  render(){
    return (<section className='user__card__container'>
      <div className='user__card__avatar'></div>
      <UserData data={this.props.data}/>
      <FunctionalPanel toggleModal={this.props.toggleModal} userID={this.props.data.id}/>
    </section>)
  }
}